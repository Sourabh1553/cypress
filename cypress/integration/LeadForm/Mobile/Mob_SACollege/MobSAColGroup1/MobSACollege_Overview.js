    describe('Mobile- Study Abroad College Overview Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_overview)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_overview)
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

        it('Btech Form- Check detailed fees', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_checkfees_btn).click()
                cy.LeadForm('mob_sa_Btech')
            })            
        })

        it('Btech Form- Download brochure', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_sacol_db5_btn).click()
                cy.LeadForm('mob_sa_Btech')
            })
        })
        
        it('Similar colleges -Btech Form', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.mob_sacol_similar_btn).then($el => $el.trigger('click')))
                cy.LeadForm('mob_sa_BTECH')
            })
        })
    })