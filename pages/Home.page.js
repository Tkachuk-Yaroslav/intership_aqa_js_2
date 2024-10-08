import { expect } from "@playwright/test";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  get registerLink() {
    return this.page.locator("#account > ul > li > a.register");
  }

  get loginLink() {
    return this.page.locator("#account > ul > li > a.login");
  }

  get docsSection() {
    return this.page.locator('h2:has-text("Documentation")');
  }

  get guideLink() {
    return this.page.locator(
      '#content ul>li>a[href="/projects/redmine/wiki/Guide"]'
    );
  }

  get issuelsLink() {
    return this.page.locator('#main-menu a[class="issues"]');
  }

  get myAccountLink() {
    return this.page.locator("#account > ul > li > a.my-account");
  }

  async clickOnRegisterLink() {
    await this.registerLink.click();
  }

  async clickOnLoginLink() {
    await this.loginLink.click();
  }

  async clickOnGuideLink() {
    await this.guideLink.click();
  }

  async clickOnIssuesLink() {
    await expect(this.issuelsLink).toBeVisible();
    await this.issuelsLink.click();
  }

  async clickOnMyAccountLink() {
    await this.myAccountLink.click();
  }

  async checkPageTitle(expectedURL) {
    await expect(this.page).toHaveTitle(expectedURL);
  }

  async scrollToDocsSection() {
    await expect(this.docsSection).toBeVisible();
    await this.docsSection.scrollIntoViewIfNeeded();
  }
}

export default HomePage;
