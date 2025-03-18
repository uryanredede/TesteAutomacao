import searchPage from "../support/pageObjects/searchPage";
import productPage from "../support/pageObjects/productPage";
import cartPage from "../support/pageObjects/cartPage";

describe("Adicionar produto ao carrinho", () => {
  beforeEach(() => {
    cy.visit("https://advantageonlineshopping.com/#/");
  });

  it("Deve buscar o produto e adicionar ao carrinho", function () {
    cy.fixture("products").then((product) => {
      searchPage.searchProduct(product.name);
      searchPage.clickOnProduct();
      productPage.selectColor(product.color);
      productPage.setQuantity(product.quantity);
      productPage.addToCart();
      productPage.goToCart();
      cartPage.verifyProductInCart(product.name, product.color, product.quantity);
    });
  });
});