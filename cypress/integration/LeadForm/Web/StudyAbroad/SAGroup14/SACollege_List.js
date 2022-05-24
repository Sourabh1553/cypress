    describe('Study Abroad College Listing Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_list)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_list)
                }
            })
        })
    
        it('MBA Form- Apply Now- College-1', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_applynow2).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_MBA')
            })
        })
        
        it('MBA Form- Download Brochure- College 1', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_db2).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_MBA')
            })
        })
    
        it('Btech Form- Apply Now button- College 2', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_applynow3).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_Btech')
            })
        })
    })