class SearchPage {
    searchProduct(productName) {
      cy.get("#menuSearch").should("exist");
      cy.get("#menuSearch").click({ force: true });
  
      cy.get("#mobileSearch > .roboto-medium").should("be.visible").type(`${productName}{enter}`);
    }
  
    verifySearchResults(productName) {
      cy.get(".productName", { timeout: 20000 }) 
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          console.log("Texto encontrado:", text);
          expect(text.toUpperCase()).to.include(productName.toUpperCase());
        });
    }    

    clickOnProduct() {
        cy.get(".imgProduct").should("be.visible").first().click(); 
      }      
    }      
  
  export default new SearchPage();
  
  