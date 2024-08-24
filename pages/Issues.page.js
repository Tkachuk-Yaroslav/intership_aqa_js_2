import { expect } from "@playwright/test";

class IssuesPage {
  constructor(page) {
    this.page = page;
  }

  get filterSelect() {
    return this.page.locator("#add_filter_select");
  }

  get applyLink() {
    return this.page.locator("#query_form_content+p>a:first-child");
  }

  get sortedDataArray() {
    return this.page.locator("tbody > tr td.tracker");
  }

  async selectOptionInFilterSelect(option) {
    await this.filterSelect.selectOption(option);
  }

  async clickOnApplyLink() {
    await this.applyLink.click();
  }

  async rowCount() {
    return await this.sortedDataArray.count();
  }

  async checkSortedDataArray(sortedValue) {
    for (let i = 0; i < (await this.rowCount()); i++) {
      const trackerText = await this.sortedDataArray.nth(i).textContent();
      expect(trackerText.trim()).toBe(sortedValue);
    }
  }
}

export default IssuesPage;
