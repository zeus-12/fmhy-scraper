import { LinkType } from "../../utils/types";
import prisma from "../../utils/prisma";

const addLinksToDb = async (data_: LinkType[]) => {
  // reset links table
  await prisma.link.createMany({
    data: data_.map((item) => ({
      title: item.title,
      starred: item.starred,
      link: JSON.stringify(item.link),
    })),
  });
};

export default addLinksToDb;
