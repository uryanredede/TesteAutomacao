import searchPage from "../support/pageObjects/searchPage";
import productPage from "../support/pageObjects/productPage";
import cartPage from "../support/pageObjects/cartPage";
import paymentPage from "../support/pageObjects/paymentPage";

describe("Validação de checkout", () => {
  beforeEach(() => {
    cy.visit("https://advantageonlineshopping.com/#/");
  });

  it("Deve buscar o produto, adicionar ao carrinho e validar sua informação na tela de checkout", function () {
    cy.fixture("products").then((product) => {
      searchPage.searchProduct(product.name);
      searchPage.clickOnProduct();
      productPage.selectColor(product.color);
      productPage.setQuantity(product.quantity);
      productPage.addToCart();
      productPage.goToCart();
      cartPage.clickCheckout();
      paymentPage.verifyProductDetails(product);
    });
  });
});