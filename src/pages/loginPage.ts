import { expect } from "@playwright/test";
import { type } from "os";
export default class LoginPage {
    private Elements = {
        usernameInput: "//input[@id='user-name']",
        passwordInput: "//input[@name='password']",
        loginBtn: "//input[@id='login-button']",
        errorMessageLogin: "//h3[@data-test='error']"
    }

    async navigateToSauceDemoPage() {
        await global.page.goto(process.env.BASEURL);
        await global.page.waitForSelector(this.Elements.usernameInput);
    }

    async enterUsername(username: string) {
        await global.page.fill(this.Elements.usernameInput, username);
    }

    async enterPassword(password: string) {
        await global.page.fill(this.Elements.passwordInput, password);
    }

    async clickLoginButton() {
        await global.page.click(this.Elements.loginBtn);
    }

    async verifyLoginErrorMessage() {
        await global.page.waitForSelector(this.Elements.errorMessageLogin);
        await expect(global.page.locator(this.Elements.errorMessageLogin)).toBeVisible();
    }
}