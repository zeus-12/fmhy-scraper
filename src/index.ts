import { RESOURCES } from "../utils/CONSTANTS";
import scrape from "./scrape";
import updateDb from "./updateDb";
// import { clean } from "../utils/helper";

const script = async () => {
  // await clean();
  RESOURCES.map(async (resource) => {
    const scrapedData = await scrape(resource.urlEnding);

    await updateDb(scrapedData, resource.title);
  });
};

script();

//   fs.writeFileSync("data.json", JSON.stringify(res));
