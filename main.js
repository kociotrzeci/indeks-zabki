const puppeteer = require("puppeteer");

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.openstreetmap.org/");
  await page.waitForSelector(".form-control");
  await page.type(".form-control", "kępno dino");
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
      console.log(error);
      finishedScanning = 1;
    }
    console.log(
      (
        await page.$$(
          "#sidebar_content > div.search_results_entry.mx-n3 > ul > li"
        )
      ).length
    );
  }

  /*
  // Type into search box
  await page.type(".devsite-search-field", "automate beyond recorder");

  // Wait and click on first result
  const searchResultSelector = ".devsite-result-item-link";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    "text/Customize and automate"
  );
  const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);
  */
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
