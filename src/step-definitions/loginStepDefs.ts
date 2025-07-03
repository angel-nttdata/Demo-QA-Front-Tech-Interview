import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('que estoy en la página de inicio de Sauce Demo', async ()=> {
    await loginPage.navigateToSauceDemoPage();
})

When('ingreso mis credenciales username {string} y password {string}', async (username: string, password: string) => {
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
})

When('hago clic en el botón Login', async () => {
    await loginPage.clickLoginButton();
})

Then('valido que estoy en la página de productos', async () => {
    await inventoryPage.verifyInventoryPageTitle();
})

Then('valido que se muestra un mensaje de error de inicio de sesión', async () => {
    await loginPage.verifyLoginErrorMessage();
})