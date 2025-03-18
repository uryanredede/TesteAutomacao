describe('Busca de Produto - Advantage Online Shopping API', () => {
    const baseUrl = 'https://www.advantageonlineshopping.com/catalog/api/v1';

    it('Deve buscar um produto e validar a resposta', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/products/search`,
            qs: { name: 'BOSE SOUNDLINK BLUETOOTH SPEAKER III' }
        }).then((response) => {
            cy.log(response.body);

            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);

            response.body.forEach(category => {
                expect(category).to.have.property('products').that.is.an('array');

                category.products.forEach(product => {
                    expect(product).to.have.property('productName');
                    expect(product.productName).to.eq("Bose Soundlink Bluetooth Speaker III");
                });
            });
        });
    });
});
