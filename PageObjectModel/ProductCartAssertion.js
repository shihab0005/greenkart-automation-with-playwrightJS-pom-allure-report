import { expect } from "@playwright/test";

export default class ProductCartAssertion {
  constructor(page) {
    this.page = page;

    this.cartImage = this.page.locator(
      "//div[@class='products']//div[1]//div[1]"
    );
    this.vegName = this.page.locator("//div[@class='products']//div[1]//h4");

    this.vegPrice = this.page.locator("//div[@class='products']//div[1]//p");

    this.addToCartBtn = this.page.locator(
      "//div[@class='products']//div[1]//button[text()='ADD TO CART']"
    );
  }
  async VerifyCart() {
    await expect(this.cartImage).toBeVisible();
    await expect(this.vegName).toContainText("1 Kg");
    await expect(this.vegPrice).toBeVisible();
    await expect(this.addToCartBtn).toBeVisible();
  }
}
