import { LinkType } from "../../utils/types";
import prisma from "../../utils/prisma";

const addLinksToDb = async (data_: LinkType[]) => {
  // await prisma.wiki.deleteMany({});
  await prisma.wiki.createMany({
    data: data_.map((item, i) => {
      console.log(item, i);
      return {
        title: item.title,
        // starred: item.starred,
        link: JSON.stringify(item.link),
        nsfw: item.isNsfw,
      };
    }),
  });
};

export default addLinksToDb;
