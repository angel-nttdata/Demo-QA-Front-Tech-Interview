import { expect } from "@playwright/test";
import { Utilities } from "../helper/utilities";

export default class InventoryPage{
    private util = new Utilities();
    
    private Elements = {
        inventoryPageTitle: "//span[@class='title'][text()='Products']",
        productNameAddBtn: "//div[@class='inventory_item'][.//div[@data-test='inventory-item-name'][text()='%s']]//button[text()='Add to cart']",
        cartWithProductCountIcon: "//span[@class='shopping_cart_badge']",
        shoppingCartIcon: "//a[@class='shopping_cart_link']"
    }

    async verifyInventoryPageTitle(){
        await global.page.waitForSelector(this.Elements.inventoryPageTitle);
        await expect(global.page.locator(this.Elements.inventoryPageTitle)).toBeVisible();
    }

    async addProductToCart(productName: string) {
        const productAddBtnByName = this.util.formatString(this.Elements.productNameAddBtn, productName);
        await global.page.waitForSelector(productAddBtnByName);
        await global.page.click(productAddBtnByName);
    }

    async verifyCartIconWithProductCount() {
        await global.page.waitForSelector(this.Elements.cartWithProductCountIcon);
        await expect(global.page.locator(this.Elements.cartWithProductCountIcon)).toBeVisible();
    }

    async clickShoppingCartIcon() {
        await global.page.waitForSelector(this.Elements.shoppingCartIcon);
        await global.page.click(this.Elements.shoppingCartIcon);
    }
}