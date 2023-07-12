import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

const LoginGoogleBrowser = async () => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const username = "vicmelgar11@gmail.com";
  const password = "vicsito11";

  await page.setExtraHTTPHeaders({
    "accept-language": "en-US,en;q=0.9,hy;q=0.8",
  });

  await page.goto("https://www.gmail.com");

  await page.type('input[type="email"]', `${username}`);
  await page.click("#identifierNext");

  await page.waitForSelector('input[type="password"]', { visible: true });
  await page.type('input[type="password"]', `${password}`);
  await page.click("#passwordNext");

  await page.waitForNavigation();

  const composeButton = await page.$('div[role="button"][gh="cm"]');
  if (composeButton) {
    console.log("Logged in to Gmail!");
  } else {
    console.log("Failed to log in to Gmail.");
  }

  await browser.close();
};

LoginGoogleBrowser();
