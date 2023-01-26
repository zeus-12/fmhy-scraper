import * as cheerio from "cheerio";
import fetch from "node-fetch";
import { currentEle, prettifyTitle } from "../utils/helper";
import { LinkType, CategoryType } from "../utils/types";
import * as fs from "fs";

// to scrape just the links

async function get_links(
  $: cheerio.CheerioAPI,
  children: cheerio.Cheerio<cheerio.Element>,
  i: number
) {
  let res: LinkType[] = [];
  let nextUl = $(children[i]).next("ul");
  let curLi = $(nextUl).children("li");

  curLi.each((_, element) => {
    let item: LinkType = { title: "", link: [], starred: false };

    let title = $(element).text();
    if (title.includes("⭐ ")) {
      item.starred = true;
    }

    item.title = prettifyTitle($(element), "⭐ ");

    // for bolded links
    $(element)
      .children("strong")
      .children("a")
      .each((_: number, element: cheerio.Element) => {
        let link = $(element).attr("href");
        // @ts-ignore
        item.link.push(link);
      });

    $(element)
      .children("a")
      .each((_: number, element: cheerio.Element) => {
        let link = $(element).attr("href");
        // @ts-ignore
        item.link.push(link);
      });

    res.push(item);
  });

  return res;
}

export default async function scrape(urlEnding: string) {
  const html = await fetch(
    `https://github.com/nbats/FMHYedit/blob/main/${urlEnding}.md`
  );
  const text = await html.text();

  const $ = cheerio.load(text);

  var markdown = $(".markdown-body").children();

  let i = 0;
  var res: any = [];

  while (i < markdown.length) {
    if (currentEle("h1", $(markdown[i])) || currentEle("h2", $(markdown[i]))) {
      let temp = await get_links($, markdown, i);
      res = res.concat(temp);

      i += 1;
    } else {
      i += 1;
    }
  }
  fs.writeFile("data.json", JSON.stringify(res), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
  return res;
}
