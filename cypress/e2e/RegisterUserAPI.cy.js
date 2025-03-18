describe('Registro de Usuário - Advantage Online Shopping API', () => {
    const baseUrl = 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1';
    it('Deve registrar um novo usuário com sucesso', () => {
        cy.fixture('userRegister.json').then((userData) => {
            cy.request({
                method: 'POST',
                url: `${baseUrl}/register`,
                body: userData,
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('statusMessage');
                expect(response.body.statusMessage.success).to.be.true;
            });
        });
    });
});
