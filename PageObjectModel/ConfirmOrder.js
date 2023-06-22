export default class ConfirmOrder {
  constructor(page) {
    this.page = page;
    this.products = this.page.locator(
      "//div[@class='products']//div[@class='product']"
    );
    this.cartBtn = this.page.locator(".cart-icon");
    this.checkoutBtn = this.page.locator(
      "//button[text()='PROCEED TO CHECKOUT']"
    );
    this.promoInp = this.page.locator(".promoCode");
    this.promoBtn = this.page.locator(".promoBtn");
    this.promoInfo = this.page.locator(".promoBtn");
    this.placeOrderBtn = this.page.locator("//button[text()='Place Order']");
    this.selectLocator = this.page.locator(".wrapperTwo select");
  }

  async OrderConfirm(productName, cupon) {
    const len = await this.products.count();
    console.log("Total Vegetables and Fruits Are : " + len);

    for (let i = 0; i < len; i++) {
      const itemName = await this.products
        .nth(i)
        .locator(".product-name")
        .textContent();
      const veg = itemName.split(" ")[0];
      if (veg === productName) {
        await this.products.nth(i).locator("button").click();
      }
    }
    await this.cartBtn.click();
    await this.checkoutBtn.click();
    await this.promoInp.fill(cupon);
    await this.promoBtn.click();
    await this.promoInfo.waitFor();
    await this.placeOrderBtn.click();
    await this.selectLocator.selectOption("Bangladesh");
    await this.page.locator(".chkAgree").click();
    await this.page.click("//button[text()='Proceed']");
  }
}
