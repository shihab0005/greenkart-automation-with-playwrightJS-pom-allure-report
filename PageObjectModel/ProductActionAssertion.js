export default class ProductActionAssertion {
  constructor(page) {
    this.page = page;

    this.products = this.page.locator(
      "//div[@class='products']//div[@class='product']"
    );
  }

  async DisplayAllItems() {
    const len = await this.products.count();
    console.log("Total Vegetables and Fruits Are : " + len);

    for (let i = 0; i < len; i++) {
      const itemName = await this.products
        .nth(i)
        .locator(".product-name")
        .textContent();
      const itemPrice = await this.products
        .nth(i)
        .locator(".product-price")
        .textContent();
      const veg = itemName.split(" ")[0];
      console.log("Item Name and Price: " + veg, itemPrice);
    }
  }

  async CheckIncDecBtn() {
    const len = await this.products.count();
    console.log("Total Vegetables and Fruits Are : " + len);
    for (let i = 0; i < len; i++) {
      let j = 1;
      while (j < 4) {
        await this.products.nth(i).locator(".increment").click();
        await this.products.nth(i).locator(".decrement").click();
        j++;
      }
    }
  }
  async CheckAddToCartBtn() {
    const len = await this.products.count();
    console.log("Total Vegetables and Fruits Are : " + len);
    for (let i = 0; i < len; i++) {
      await this.products.nth(i).locator("button").click();
    }
  }
}
