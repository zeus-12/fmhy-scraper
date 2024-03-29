import scrape from "./scraper";
import { RESOURCES } from "../../utils/CONSTANTS";
import { LinkType } from "../../utils/types";
import { addLinksToDb, removeAllWikiLinksFromDb } from "./db";

export const scrapeWiki = async () => {
  let data: LinkType[] = [];
  let scrapedData!: LinkType[];

  const isShort = true;

  await Promise.all(
    RESOURCES.map(async (resource) => {
      scrapedData = [];
      if (resource.urlEnding === "STORAGE") {
        // scrapedData = await storage_scraper(isShort);
      } else {
        scrapedData = await scrape(resource.urlEnding, isShort);
      }
      data = data.concat([...scrapedData]);
    })
  );

  return data;
};

const scrapeAndAddToDb = async () => {
  console.log("---DELETING OLD LINKS----");
  await removeAllWikiLinksFromDb();

  console.log("---SCRAPING LINKS----");
  const data = await scrapeWiki();

  console.log("---WRITING " + data.length + " LINKS TO DB----");
  await addLinksToDb(data);

  console.log("---DONE WRITING LINKS----");
};

export default scrapeAndAddToDb;
