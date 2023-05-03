import { currentEle, getCheerioDocument } from "../../utils/helper";

export async function base64_scraper() {
  const { $, markdown } = await getCheerioDocument("base64");
  const finalData: any = [];

  let i = 0;

  const h4ElementsToIgnore = ["How-to Decode Links"];
  while (i < markdown.length) {
    if (
      currentEle("h4", $(markdown[i])) &&
      !h4ElementsToIgnore.includes($(markdown[i]).text())
    ) {
      const title = $(markdown[i]).text();
      let hash = $(markdown[i]).next("p").text();

      hash = hash.trim();

      // check for true base64
      try {
        atob(hash);
      } catch (err) {
        console.log(hash + " is not base64❗️");
        throw err;
      }

      finalData.push({ title, hash });
    }
    i += 1;
  }
  return finalData;
}
