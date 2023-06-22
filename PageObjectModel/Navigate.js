import { expect } from "@playwright/test";

export default class Navigate {
  constructor(page) {
    this.page = page;
  }

  async navigateToWebpage(Url, title) {
    await this.page.goto(Url);
    await expect(this.page).toHaveURL(Url);
    await expect(this.page).toHaveTitle(title);
  }
}
