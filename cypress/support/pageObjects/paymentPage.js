class PaymentPage {
    verifyProductDetails(product) {
      cy.get("#userCart > #toolTipCart").should("be.visible");
  
      cy.get("#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding")
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          const trimmedText = text.trim();
          expect(trimmedText.startsWith(product.name.substring(0, 10))).to.be.true;
        });
  
      cy.get("#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(2)")
        .should("be.visible")
        .invoke("text")
        .then((text) => {
        const quantity = text.replace("QTY: ", "").trim();
        expect(quantity).to.eq(product.quantity);
        });

      cy.get("#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(3) > .ng-binding")
        .should("have.text", product.color);
    }
  }
  
  export default new PaymentPage();
  