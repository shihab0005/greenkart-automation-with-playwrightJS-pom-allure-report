import { test } from "@playwright/test";
import Navigate from "../PageObjectModel/Navigate";
import ProductSearch from "../PageObjectModel/ProductSearch";
import ProductCartAssertion from "../PageObjectModel/ProductCartAssertion";

const Url = "https://rahulshettyacademy.com/seleniumPractise/#/";
const title = "GreenKart - veg and fruits kart";
const searchKey = "br";
test.describe("Search Vegetables and Fruits", async () => {
  test.beforeEach(async ({ page }) => {
    // const contex = await browser.newContext();
    // const page = await contex.newPage();
    const nav = new Navigate(page);
    await nav.navigateToWebpage(Url, title);
  });

  test("Product Search", async ({ page }) => {
    const sp = new ProductSearch(page);
    await sp.SearchProduct(searchKey);
  });

  test("Product Cart Assertion", async ({ page }) => {
    const cartAssertion = new ProductCartAssertion(page);
    await cartAssertion.VerifyCart();
  });
});
