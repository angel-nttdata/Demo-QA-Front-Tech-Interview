import { type } from "os";
export default class LoginPage {
    private Elements = {
        usernameInput: "//input[@id='user-name']",
        passwordInput: "//input[@name='password']",
        loginBtn: "//input[@id='login-button']"
    }

    async navigateToSauceDemoPage() {
        await global.page.goto(process.env.BASEURL);
        await global.page.waitForSelector(this.Elements.usernameInput);
    }
}