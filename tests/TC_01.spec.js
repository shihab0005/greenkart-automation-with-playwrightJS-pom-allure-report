import { test } from "@playwright/test";
import Navigate from "../PageObjectModel/Navigate";
import HomeAssertion from "../PageObjectModel/HomeAssertion";

const Url = "https://rahulshettyacademy.com/seleniumPractise/#/";
const title = "GreenKart - veg and fruits kart";

test.describe("Check Ui With Assertion on home Page", async () => {
  test.beforeEach(async ({ page }) => {
    // const contex = await browser.newContext();
    // const page = await contex.newPage();
    const nav = new Navigate(page);
    await nav.navigateToWebpage(Url, title);
  });

  test("Check All Element", async ({ page }) => {
    const homeUi = new HomeAssertion(page);
    await homeUi.HomePageAssertion();
  });
  
});
