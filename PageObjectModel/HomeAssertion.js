import { expect } from "@playwright/test";

export default class HomeAssertion {
  constructor(page) {
    this.page = page;
    this.brandLogo = this.page.locator(".brand");
    this.searchBox = this.page.locator(".search");
    this.topDeals = this.page.locator("//a[text()='Top Deals']");
    this.flightBooking = this.page.locator("//a[text()='Flight Booking']");
    this.addToCartBtn = this.page.locator(".cart-icon");
    this.products = this.page.locator(".product");
  }

  async HomePageAssertion() {
    await expect(this.brandLogo).toBeVisible();
    await expect(this.searchBox).toBeVisible();
    await expect(this.topDeals).toBeVisible();
    await expect(this.topDeals).toHaveText("Top Deals");
    await expect(this.flightBooking).toBeVisible();
    await expect(this.flightBooking).toHaveText("Flight Booking");
    await expect(this.addToCartBtn).toBeVisible();
    await expect(this.page.locator(".cart-icon img")).toHaveAttribute(
      "alt",
      "Cart"
    );
    const len = await this.products.count();
    console.log("Total vegetable available :", len);
  }
}
