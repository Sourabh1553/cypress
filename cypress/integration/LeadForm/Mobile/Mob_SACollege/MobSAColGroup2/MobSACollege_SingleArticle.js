    describe('Mobile- Study Abroad Single Article Page- Sanity', () => {
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
                cy.scrollTo(0,10)
                cy.waitUntil(() => cy.get(data.mob_sa_downloadguide_btn).then($el => $el.trigger('click')))
                cy.LeadForm('mob_SA_MBA_canada')
            })
        })
         
        it('MBA Form- Free Counselling', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.scrollTo(0,10)
                cy.waitUntil(() => cy.get(data.mob_sa_free_counselling).then($el => $el.trigger('click')))
                cy.LeadForm('mob_SA_MBA_canada')
            })
        })
     
        it('Btech Form- Download Guide', () => {
            cy.fixture('xpath').then((data)=>{
                cy.scrollTo(0,10)
                cy.waitUntil(() => cy.get(data.mob_sa_downloadguide_btn).then($el => $el.trigger('click')))
                cy.LeadForm('mob_SA_Btech_canada')
            })
        })
    })