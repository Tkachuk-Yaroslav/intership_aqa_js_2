import { expect } from "@playwright/test";

class GuidePage {
  constructor(page) {
    this.page = page;
  }

  get guideSection() {
    return this.page.locator('h2:has-text("User guide")');
  }

  get getStartedLink() {
    return this.page.locator(
      'a[href="/projects/redmine/wiki/Getting_Started"]'
    );
  }

  get stepOneTitle() {
    return this.page.locator("#content > div.wiki-page > h2:nth-child(6)");
  }

  async scrollToGuideSection() {
    await this.guideSection.scrollIntoViewIfNeeded();
  }

  async clickOnGetStartedLink() {
    await this.getStartedLink.click();
  }

  async checkTextInStepOneTitle(expectedText) {
    await expect(this.stepOneTitle).toHaveText(expectedText);
  }
}

export default GuidePage;
