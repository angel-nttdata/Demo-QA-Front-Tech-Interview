import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('que estoy en la página de inicio de Sauce Demo', async ()=> {
    await loginPage.navigateToSauceDemoPage();
})