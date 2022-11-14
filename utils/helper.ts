import { prisma } from "./prisma";

export const clean = async () => {
  await prisma.resource.deleteMany();
  await prisma.link.deleteMany();
  await prisma.subCategory.deleteMany();
  await prisma.category.deleteMany();
  await prisma.linkArray.deleteMany();
};

export let currentEle = (tag: string, data: any) => data.is(tag);

export const prettifyTitle = (data: any, textToRemove: string) => {
  return data.text().replaceAll(textToRemove, "");
};
