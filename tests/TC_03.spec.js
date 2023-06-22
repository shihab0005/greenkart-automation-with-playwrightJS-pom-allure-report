import { test } from "@playwright/test";
import Navigate from "../PageObjectModel/Navigate";
import ProductActionAssertion from "../PageObjectModel/ProductActionAssertion";

const Url = "https://rahulshettyacademy.com/seleniumPractise/#/";
const title = "GreenKart - veg and fruits kart";

test.describe("Vegetables and Fruits Cart Assertion", async () => {
  test.beforeEach(async ({ page }) => {
    // const contex = await browser.newContext();
    // const page = await contex.newPage();
    const nav = new Navigate(page);
    await nav.navigateToWebpage(Url, title);
  });

  test("Display All Vegetables", async ({ page }) => {
    const displayItem = new ProductActionAssertion(page);
    await displayItem.DisplayAllItems();
  });

  test("Check Increment And Decrement Button Of Product", async ({ page }) => {
    const CheckButtons = new ProductActionAssertion(page);
    await CheckButtons.CheckIncDecBtn();
  });

  test("Vegetables and Fruits Add to Cart", async ({ page }) => {
    const CheckAddToCartButton = new ProductActionAssertion(page);
    await CheckAddToCartButton.CheckAddToCartBtn();
  });
});
