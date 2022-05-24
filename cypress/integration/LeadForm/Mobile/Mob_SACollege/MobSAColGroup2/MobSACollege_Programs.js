    describe('Mobile- Study Abroad College Program Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_program)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_program)
                }
            })
            cy.intercept('POST')
            cy.intercept('GET')
        })
    
        it('MBA Form- Start application', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_startapp_btn).click()
                cy.LeadForm('mob_sa_MBA')
            })
        }) 

        it('Btech Form- Start application', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_startapp_btn).click()
                cy.LeadForm('mob_sa_btech')
            })
        })
    })