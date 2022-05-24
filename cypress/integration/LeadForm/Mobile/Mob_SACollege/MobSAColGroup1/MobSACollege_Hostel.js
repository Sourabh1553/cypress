    describe('Mobile- Study Abroad Hostel Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_hostel)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_hostel)
                }
            })
        })
    
        it('MBA Form- Start application', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_startapp_btn).click()
                cy.LeadForm('mob_sa_MBA')
            })
        }) 
    
        it('Similar colleges -Btech Form', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.mob_sacol_similar_btn).then($el => $el.trigger('click')))
                cy.LeadForm('mob_sa_BTECH')
            })
        })
    })