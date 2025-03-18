class ProductPage {
    verifyProductName(productName) {
      cy.get(".roboto-regular").should("contain.text", productName);
    }
  
    selectColor(color) {
      cy.get(".colors")
        .should("be.visible")
        .find("span")
        .each(($el) => {
          cy.wrap($el)
            .invoke("text")
            .then((text) => {
              if (text.trim().toUpperCase() === color.toUpperCase()) {
                cy.wrap($el).click();
              }
            });
        });
    }
  
    setQuantity(quantity) {
      cy.get("input[name='quantity']").clear().type(quantity);
    }
  
    addToCart() {
      cy.get("[name='save_to_cart']").should("be.visible").click();
    }
  
    goToCart() {
      cy.get("#menuCart").should("be.visible").click(); 
      cy.url().should("include", "/shoppingCart"); 
    }
  }
  
  export default new ProductPage();
  