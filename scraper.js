const puppeteer = require("puppeteer");

async function scrapper(_city) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = "https://zabka.okazjum.pl/sklepy/" + _city;
  await page.goto(url);
  try {
    await page.waitForSelector(".text-darken-2", { timeout: 10000 });
  } catch {
    return "err";
  }
  let count = await page.evaluate(
    (sel, __city) => {
      let elements = Array.from(document.querySelectorAll(sel));
      let count = elements.filter((element) => {
        let lines = element.textContent.split(",");
        return lines[0].trim() === __city;
      }).length;
      return count;
    },
    ".text-darken-2",
    _city
  );
  // console.log(count);
  await browser.close();
  return count;
}
module.exports = scrapper;
