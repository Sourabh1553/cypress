describe('Database query', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('Get data from DB', () =>{
        cy.log(cy.sqlServer('SELECT name FROM leads WHERE email="pqr@gmail.com" and phone_no="9873767311" limit 1').should('eq', 'test'));
    }) 
})