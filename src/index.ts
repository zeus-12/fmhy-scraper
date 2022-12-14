import { RESOURCES } from "../utils/CONSTANTS";
import scrape from "./scrape";
import updateDb from "./updateDb";
import { clean } from "../utils/helper";
import cron from "node-cron"

const script = async () => {
  // await clean();
  RESOURCES.map(async (resource) => {
    const scrapedData = await scrape(resource.urlEnding);

    await updateDb(scrapedData, resource.title);
  });
};

cron.schedule("0 0 * * 0", async() => {
  await clean()
  await script();
});


