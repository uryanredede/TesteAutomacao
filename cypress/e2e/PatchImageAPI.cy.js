describe('Atualização de Imagem de Produto - Advantage Online Shopping API', () => {
    const baseUrl = 'https://www.advantageonlineshopping.com/catalog/api/v1';

    before(() => {
        cy.login().then((response) => {
            Cypress.env('authToken', response.body.statusMessage.token); 
            Cypress.env('userId', response.body.statusMessage.userId);
        });
    });
    
    it('Deve atualizar a imagem de um produto e validar a resposta', () => {
        const source = 'BOSE SOUNDLINK BLUETOOTH SPEAKER III'; 
        const color = 'BLACK'; 
        const productId = '20'; 
        const userId = Cypress.env('userId');
        
        cy.fixture('Teste.png').then((fileContent) => {
            const formData = new FormData();
            formData.append('file', fileContent, 'Teste.png');
            
            cy.request({
                method: 'POST',
                url: `${baseUrl}/product/image/${userId}/${source}/${color}`,
                qs: { product_id: productId },
                body: formData,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('imageId');
                expect(response.body.imageId).to.be.a('string');
            });
        });
    });
});
