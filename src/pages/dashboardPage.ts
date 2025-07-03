import { expect } from "@playwright/test";

export default class DashboardPage{
    private Elements = {
        dashboardTitle: "//header/div[1]/div[1]/span[1]/h6[1]"
    }

    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();
        await global.page.waitForTimeout(10000); // Wait for 2 seconds to see the dashboard
    }
}