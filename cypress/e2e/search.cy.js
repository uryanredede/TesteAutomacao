import searchPage from "../support/pageObjects/searchPage";

describe("Buscar um produto", () => {
  beforeEach(() => {
    cy.visit("https://advantageonlineshopping.com/#/");
  });

  it("Deve buscar o produto do fixture", function () {
    cy.fixture("products").then((product) => {
      searchPage.searchProduct(product.name);
      searchPage.verifySearchResults(product.name);
    });
  });
});
