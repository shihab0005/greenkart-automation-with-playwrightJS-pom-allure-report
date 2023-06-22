export default class ProductSearch {
  constructor(page) {
    this.page = page;
    this.searchBox = this.page.locator(".search-keyword");
    this.searchResult = this.page.locator("//div[@class='product']");
  }

  async SearchProduct(s_keyword) {
    await this.searchBox.type(s_keyword, { delay: 100 });
    const total = await this.searchResult.count();
    console.log("Total Find :" + total);
    if (total == 0) {
      console.log("There is Not Product Find ");
    }
  }
}
