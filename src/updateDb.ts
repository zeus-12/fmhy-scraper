import prisma from "../utils/prisma";
import { CategoryType, SubCategoryType } from "../utils/types";

export default async function updateDb(
  resource: CategoryType[],
  resourceTitle: string
): Promise<void> {
  resource.map(async (ele) => {
    let resourceData = await prisma.resource.create({
      data: {
        title: resourceTitle,
      },
    });

    let categoryData = await prisma.category.create({
      data: {
        resourceId: resourceData.id,
        title: ele.title,
        ...getLinkData(ele),
      },
    });

    ele.subCategory.map(async (sub) => {
      await prisma.subCategory.create({
        data: {
          categoryId: categoryData.id,
          title: sub.title,
          ...getLinkData(sub),
        },
      });
    });
  });
}

const getLinkData = (ele: CategoryType | SubCategoryType) => {
  let linkData = {};
  if (ele.links.length > 0) {
    linkData = {
      create: ele.links.map((item) => ({
        title: item.title,
        starred: item.starred,
        link: {
          create: item.link?.map((inner) => ({
            url: inner,
          })),
        },
      })),
    };
  } else {
    return {};
  }

  return { links: linkData };
};
