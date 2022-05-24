    describe('Study Abroad Single Review Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_singleReview)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_singleReview)
                }
            })
        })
    
        it('MBA Form- Apply now Btn', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_applynow2_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_MBA_canada')
            })
        })
        
        it('MBA Form- Apply now Btn', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_applynow2_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_MBA_canada')
            })
        })
    
        it('Btech Form-Apply now Btn', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_applynow2_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_Btech_canada')
            })
        })
    })