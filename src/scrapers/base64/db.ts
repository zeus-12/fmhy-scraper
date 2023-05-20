import prisma from "../../utils/prisma";

const addBase64LinksToDb = async (data: any) => {
  await prisma?.base64.createMany({
    data: data.map((item: { title: string; hash: string }) => {
      return {
        title: item.title,
        hash: item.hash,
      };
    }),
  });
};
export default addBase64LinksToDb;
