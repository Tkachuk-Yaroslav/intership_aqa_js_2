import { expect } from "@playwright/test";

class MyAccountPage {
  constructor(page) {
    this.page = page;
  }

  get changePasswordLink() {
    return this.page.locator("#content a.icon-passwd");
  }

  get passwordInput() {
    return this.page.locator("#password");
  }

  get newPasswordInput() {
    return this.page.locator("#new_password");
  }

  get confirmPasswordInput() {
    return this.page.locator("#new_password_confirmation");
  }

  get submitButton() {
    return this.page.locator('form>input[type="submit"]');
  }
  async clickOnChangePasswordLink() {
    await this.changePasswordLink.click();
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
  }

  async fillChangePasswdForm(oldPasswd, newPasswd, confirmPasswd) {
    await this.passwordInput.fill(oldPasswd);
    await this.newPasswordInput.fill(newPasswd);
    await this.confirmPasswordInput.fill(confirmPasswd);
  }
}

export default MyAccountPage;
