import { prisma } from "../utils/prisma";
import { CategoryType } from "../utils/types";

export default async function updateDb(
  resource: CategoryType[],
  resourceTitle: string
): Promise<void> {
  resource.map(async (ele) => {
    const resourceData = await prisma.resource.create({
      data: {
        title: resourceTitle,
      },
    });

    let linkData = {};
    if (ele.links.length > 0) {
      linkData = {
        create: ele.links.map((item) => ({
          title: item.title,
          starred: false,
          link: {
            create: item.link.map((inner) => ({
              link: inner,
            })),
          },
        })),
      };
    }

    await prisma.category.create({
      data: {
        resourceId: resourceData.id,
        title: ele.title,
        links: linkData,
        subCategory: {
          // @ts-ignore
          create: ele.subCategory.map((sub) => ({
            title: sub.title,
            links: {
              create: sub.links.map((inner) => ({
                title: inner.title,
                starred: inner.starred,
                link: {
                  create: inner.link.map((innerinner) => ({
                    link: innerinner,
                  })),
                },
              })),
            },
          })),
        },
      },
    });
  });
}
