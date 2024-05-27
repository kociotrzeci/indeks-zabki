const puppeteer = require("puppeteer");

async function scrapper(_city) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const query = _city + " żabka";
  console.log(query);
  // Navigate the page to a URL
  await page.goto("https://www.openstreetmap.org/");
  await page.waitForSelector(".form-control");
  await page.type(".form-control", query);
  await page.keyboard.press("Enter");
  await page.waitForSelector(
    "#sidebar_content > div.search_results_entry.mx-n3 > div > a",
    { timeout: 5000 }
  );
  const textContent = await page.evaluate(() => {
    console.log(
      document.querySelector(
        "#sidebar_content > div.search_results_entry.mx-n3 > div > a"
      )
    );
  });

  let finishedScanning = 0;
  while (!finishedScanning) {
    await page.click(
      "#sidebar_content > div.search_results_entry.mx-n3 > div > a"
    );
    try {
      await page.waitForFunction(
        `document.querySelector("#sidebar_content > div.search_results_entry.mx-n3 > div > a").style.display === ""`,
        { timeout: 5000 }
      );
    } catch (error) {
      console.log("zakonczono");
      return (
        (
          await page.$$(
            "#sidebar_content > div.search_results_entry.mx-n3 > ul > li"
          )
        ).length - 1
      );
    }
    console.log(
      (
        await page.$$(
          "#sidebar_content > div.search_results_entry.mx-n3 > ul > li"
        )
      ).length
    );
  }
}

module.exports = scrapper;
