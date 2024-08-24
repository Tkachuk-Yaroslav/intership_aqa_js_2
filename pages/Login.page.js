import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get loginInput() {
    return this.page.locator("#username");
  }

  get passwordInput() {
    return this.page.locator("#password");
  }

  get submitButton() {
    return this.page.locator("#login-submit");
  }

  get successLoginMsg() {
    return this.page.locator("#flash_notice");
  }

  async checkSuccessLoginMsgAttribute(attr, value) {
    await expect(this.successLoginMsg).toHaveAttribute(attr, value);
  }

  async submit() {
    await this.submitButton.click();
  }

  async fillLoginForm(login, password) {
    await this.loginInput.fill(login);
    await this.passwordInput.fill(password);
  }
}

export default LoginPage;
