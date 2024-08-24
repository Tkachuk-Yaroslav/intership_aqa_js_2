import { expect } from "@playwright/test";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  get registerLink() {
    return this.page.locator("#account > ul > li > a.register");
  }

  // get passwordInput() {
  //   return this.page.locator("#user_password");
  // }

  // get passwordConfirmationInput() {
  //   return this.page.locator("#user_password_confirmation");
  // }

  // get firstNameInput() {
  //   return this.page.locator("#user_firstname");
  // }

  // get lastNameInput() {
  //   return this.page.locator("#user_lastname");
  // }

  // get emailInput() {
  //   return this.page.locator("#user_mail");
  // }

  // get submitButton() {
  //   return this.page.locator('form>input[type="submit"]');
  // }

  async clickOnRegisterLink() {
    await this.registerLink.click();
  }

  async checkPageTitle(expectedURL) {
    await expect(this.page).toHaveTitle(expectedURL);
  }

  // async submit() {
  //   await this.submitButton.click();
  // }
}

export default HomePage;
