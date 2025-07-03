import { expect } from "@playwright/test";
import { Utilities } from "../helper/utilities";

export default class CheckoutPage {
    private util = new Utilities();

    private Elements = {
        checkoutInformationPageTitle: "//span[@class='title'][text()='Checkout: Your Information']",
        checkoutOverviewPageTitle: "//span[@class='title'][text()='Checkout: Overview']",
        checkoutCompletePageTitle: "//span[@class='title'][text()='Checkout: Complete!']",
        firstNameInput: "//input[@id='first-name']",
        lastNameInput: "//input[@id='last-name']",
        postalCodeInput: "//input[@id='postal-code']",
        continueBtn: "//input[@id='continue']",
        finishBtn: "//button[@id='finish']",
        messageCompletePurchase: "//h2[@class='complete-header']"
    }

    async verifyCheckoutInformationPageTitle() {
        await global.page.waitForSelector(this.Elements.checkoutInformationPageTitle);
        await expect(global.page.locator(this.Elements.checkoutInformationPageTitle)).toBeVisible();
    }

    async verifyCheckoutCompletePageTitle() {
        await global.page.waitForSelector(this.Elements.checkoutCompletePageTitle);
        await expect(global.page.locator(this.Elements.checkoutCompletePageTitle)).toBeVisible();
    }

    async enterFirstName(firstName: string) {
        await global.page.waitForSelector(this.Elements.firstNameInput);
        await global.page.fill(this.Elements.firstNameInput, firstName);
    }

    async enterLastName(lastName: string) {
        await global.page.waitForSelector(this.Elements.lastNameInput);
        await global.page.fill(this.Elements.lastNameInput, lastName);
    }

    async enterPostalCode(postalCode: string) {
        await global.page.waitForSelector(this.Elements.postalCodeInput);
        await global.page.fill(this.Elements.postalCodeInput, postalCode);
    }

    async clickContinueButton() {
        await global.page.waitForSelector(this.Elements.continueBtn);
        await global.page.click(this.Elements.continueBtn);
    }

    async clickFinishButton() {
        await global.page.waitForSelector(this.Elements.finishBtn);
        await global.page.click(this.Elements.finishBtn);
    }

    async verifyMessageCompletePurchase() {
        const message = "Thank you for your order!";
        await global.page.waitForSelector(this.Elements.messageCompletePurchase);
        await expect(global.page.locator(this.Elements.messageCompletePurchase)).toHaveText(new RegExp(`^${message}$`));
    }
}