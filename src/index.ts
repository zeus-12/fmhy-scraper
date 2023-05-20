import scrapeBase64AndAddToDb from "./scrapers/base64";
// import scrapeAndAddToDb from "./scrapers/wiki";

const main = async () => {
  // await scrapeAndAddToDb();
  await scrapeBase64AndAddToDb();
};

main().catch((err) => console.error(err.message));
