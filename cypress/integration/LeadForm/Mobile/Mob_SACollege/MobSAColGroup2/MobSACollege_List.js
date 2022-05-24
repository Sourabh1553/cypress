    describe('Mobile- Study Abroad College Listing Page- Sanity', () => {
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
            cy.intercept('POST')
            cy.intercept('GET')
        })
    
        it('MBA Form- Apply now-1', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_applynow2_btn).click()
                cy.LeadForm('mob_sa_MBA')
            })
        }) 
        
        it('Btech Form- Download brochure-1', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_db3_btn).click()
                cy.LeadForm('mob_sa_Btech')
            })
        })
    })