import { test } from "@playwright/test";
import Navigate from "../PageObjectModel/Navigate";
import ConfirmOrder from "../PageObjectModel/ConfirmOrder";

const Url = "https://rahulshettyacademy.com/seleniumPractise/#/";
const title = "GreenKart - veg and fruits kart";
const productName = "Potato";
const cupon = "rahulshettyacademy";
test.describe("Purches Vegetables and Fruits ", async () => {
  test.beforeEach(async ({ page }) => {
    // const contex = await browser.newContext();
    // const page = await contex.newPage();
    const nav = new Navigate(page);
    await nav.navigateToWebpage(Url, title);
  });

  test("Oder Item and Confirm Order", async ({ page }) => {
    const order = new ConfirmOrder(page);
    await order.OrderConfirm(productName, cupon);
  });
});
