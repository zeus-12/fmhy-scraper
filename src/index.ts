import * as cheerio from "cheerio";
import fetch from "node-fetch";
import { currentEle, prettifyTitle } from "../utils/helper";
// import fs from "fs";
import updateDb from "./updateDb";

interface linkType {
  title: string;
  link: string[];
  starred: boolean;
}

async function get_links(
  $: cheerio.CheerioAPI,
  children: cheerio.Cheerio<cheerio.Element>,
  i: number
) {
  let res: linkType[] = [];
  let nextUl = $(children[i]).next("ul");
  let curLi = $(nextUl).children("li");

  curLi.each((_, element) => {
    let item = { title: "", link: [], starred: false };

    let title = $(element).text();
    if (title.includes("⭐ ")) {
      item.starred = true;
    }

    item.title = prettifyTitle($(element), "⭐ ");

    // for bolded links
    $(element)
      .children("strong")
      .children("a")
      .each((_: any, element: any) => {
        // @ts-ignore
        item.link.push($(element).attr("href"));
      });

    $(element)
      .children("a")
      // @ts-ignore
      .each((_, element) => {
        // @ts-ignore
        item.link.push($(element).attr("href"));
      });

    res.push(item);
  });

  // @ts-ignore
  return res;
}

async function scrape() {
  const html = await fetch(
    "https://github.com/nbats/FMHYedit/blob/main/AudioPiracyGuide.md"
  );
  const text = await html.text();

  const $ = cheerio.load(text);

  var markdown = $(".markdown-body").children();

  let finalData = [];

  let i = 0;

  while (i < markdown.length) {
    let res = { title: "", links: [], subCategory: [] };

    if (currentEle("h1", $(markdown[i]))) {
      let temp = await get_links($, markdown, i);
      res.title = prettifyTitle($(markdown[i]), "► ");

      // @ts-ignore
      res.links = temp;

      i += 1;

      while (!currentEle("h1", $(markdown[i])) && i < markdown.length) {
        if (currentEle("h2", $(markdown[i]))) {
          let temp = await get_links($, markdown, i);
          // @ts-ignore
          res.subCategory.push({
            title: prettifyTitle($(markdown[i]), "▷ "),
            links: temp,
          });
        }
        i += 1;
      }

      finalData.push(res);
    } else {
      i += 1;
    }
  }

  console.log(finalData);

  return { title: "Audio Piracy Guide", category: finalData };
}

const resource = scrape();

// @ts-ignore
// updateDb(resource);

// write resource to file
// resource.then((res) => {
//   fs.writeFileSync("data.json", JSON.stringify(res));
// });
