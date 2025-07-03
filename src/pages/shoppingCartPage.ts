import { expect } from "@playwright/test";
import { Utilities } from "../helper/utilities";

export default class ShoppingCartPage {
    private util = new Utilities();

    private Elements = {
        shoppingCartPageTitle: "//span[@class='title'][text()='Your Cart']",
        productByName: "//div[@class='inventory_item_name'][text()='%s']",
        checkoutBtn: "//button[@id='checkout']"
    }

    async verifyShoppingCartPageTitle() {
        await global.page.waitForSelector(this.Elements.shoppingCartPageTitle);
        await expect(global.page.locator(this.Elements.shoppingCartPageTitle)).toBeVisible();
    }

    async verifyProductInCartList(productName: string) {
        const productLocator = this.util.formatString(this.Elements.productByName, productName);
        await global.page.waitForSelector(productLocator);
        await expect(global.page.locator(productLocator)).toBeVisible();
    }

    async clickCheckoutButton() {
        await global.page.waitForSelector(this.Elements.checkoutBtn);
        await global.page.click(this.Elements.checkoutBtn);
    }
}