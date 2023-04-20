import fetch from "node-fetch";
import * as cheerio from "cheerio";
import fs from "fs";
import { LinkType } from "@/utils/types";

export let currentEle = (tag: string, data: any) => data.is(tag);

export const prettifyTitle = (data: any, textToRemove: string) => {
  return data.text().replaceAll(textToRemove, "");
};

export const getCheerioDocument = async (urlEnding: string) => {
  const html = await fetch(
    `https://github.com/nbats/FMHYedit/blob/main/${urlEnding}.md`
  );
  const text = await html.text();

  const $ = cheerio.load(text);

  var markdown = $(".markdown-body").children();
  return { $, markdown };
};

export const logLinks = (data: LinkType[]) => {
  fs.writeFileSync(
    `./src/links-scraped/${Date.now()}.json`,
    JSON.stringify(data)
  );
};
