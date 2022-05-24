    describe('Study Abroad Single Article Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_singleArticle)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_singleArticle)
                }
            })
        })
    
        it('MBA Form- Download Guide', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_article_dg_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_MBA_canada')
            })
        })
         
        it('MBA Form- Free Counselling', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_freecounselling_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_MBA_canada')
            })
        })
    
        it('Btech Form- Register now button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_registernow_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_Btech_canada')
            })
        })
    })