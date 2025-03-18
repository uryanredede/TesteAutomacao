class CartPage {
    verifyProductInCart(productName, color, quantity) {
        cy.get("body").then(($body) => {
          if ($body.find(".bigEmptyCart").length > 0) {
            throw new Error("O carrinho está vazio.");
          }
        });
    
        cy.get("tr.ng-scope").should("be.visible");
    
        cy.get("tr.ng-scope > :nth-child(2) > .roboto-regular")
          .should("be.visible")
          .should("contain.text", productName);
    
        cy.get("#shoppingCart > table > tbody > tr > td:nth-child(4) > span")
          .should("have.attr", "title")
          .then((title) => {
            expect(title.trim().toUpperCase()).to.eq(color.toUpperCase());
          });
    
        cy.get(":nth-child(5) > .ng-binding")
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.eq(quantity);
          });
      }
  
    clickCheckout() {
      cy.get("#checkOutButton").should("be.visible").click();
    }
  }
  
  export default new CartPage();
  