import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import InventoryPage from "../pages/inventoryPage";
import ShoppingCartPage from "../pages/shoppingCartPage";
import CheckoutPage from "../pages/checkoutPage";

const inventoryPage = new InventoryPage();
const shoppingCartPage = new ShoppingCartPage();
const checkoutPage = new CheckoutPage();


When('agrego el producto {string} al carrito de compras', async (product_name: string) => {
    await inventoryPage.addProductToCart(product_name);
})

Then('valido que el se muestra el ícono del carrito de compras con el número de productos', async () => {
  await inventoryPage.verifyCartIconWithProductCount();
})

When('hago clic en el ícono del carrito de compras', async () => {
  await inventoryPage.clickShoppingCartIcon();
})

Then('valido que estoy en la página del carrito de compras', async () => {
  await shoppingCartPage.verifyShoppingCartPageTitle();
})

Then('valido que el producto {string} está en la lista del carrito de compras', async (product_name: string) => {
  await shoppingCartPage.verifyProductInCartList(product_name);
});

When('hago clic en el botón Checkout', async () => {
  await shoppingCartPage.clickCheckoutButton();
})

When('ingreso mis datos de envío', async (dataTable: DataTable) => {
  const data = dataTable.rowsHash();
  await checkoutPage.verifyCheckoutInformationPageTitle();
  await checkoutPage.enterFirstName(data.firstName);
  await checkoutPage.enterLastName(data.lastName);
  await checkoutPage.enterPostalCode(data.postalCode);
})

When ('hago clic en el botón Continue', async () => {
  await checkoutPage.clickContinueButton();
})

When ('hago clic en el botón Finish', async () => {
  await checkoutPage.clickFinishButton();
})

Then('valido que se muestra un mensaje de compra exitosa', async () => {
  await checkoutPage.verifyCheckoutCompletePageTitle();
  await checkoutPage.verifyMessageCompletePurchase();
})
