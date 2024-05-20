const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  //   goto url
  page.goto("https://www.wikipedia.org");

  await page.setViewport({ width: 1080, height: 1024 });

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
