import scrapeBase64AndAddToDb from "./scrapers/base64";
import scrapeAndAddToDb from "./scrapers/wiki";
// import cron from "node-cron";
const main = async () => {
  await scrapeAndAddToDb();
  await scrapeBase64AndAddToDb();
};

// main().catch((err) => console.error(err.message));

// cron.schedule("0 0 */2 * *", async () => {
//   await main();
// });
