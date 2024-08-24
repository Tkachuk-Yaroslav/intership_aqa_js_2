import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  //   get loginInput() {
  //     return this.page.locator("#user_login");
  //   }

  //   get passwordInput() {
  //     return this.page.locator("#user_password");
  //   }

  //   get submitButton() {
  //     return this.page.locator('form>input[type="submit"]');
  //   }

  get successLoginMsg() {
    return this.page.locator("#flash_notice");
  }

  async checkSuccessLoginMsgAttribute(attr, value) {
    await expect(this.successLoginMsg).toHaveAttribute(attr, value);
  }

  async submit() {
    await this.submitButton.click();
  }
}

export default LoginPage;
