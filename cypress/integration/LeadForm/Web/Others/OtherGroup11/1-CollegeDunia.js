    describe('Collegedunia Home Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.other_home)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.other_home)
                }
            })
        })
    
        it('Like btn1- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.wait(1000)
                cy.waitUntil(() => cy.get(data.other_like).eq(0).then($el => $el.trigger('click')))
                cy.wait(1000)
                cy.LeadForm('web_india_MBBS_HomePage')
            })
        })

        it('Like btn2- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.wait(1000)
                cy.waitUntil(() => cy.get(data.other_like).eq(1).then($el => $el.trigger('click')))
                cy.wait(1000)
                cy.LeadForm('web_india_MBA_HomePage')
            })
        })
    
        it('Like btn3- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.wait(1000)
                cy.waitUntil(() => cy.get(data.other_like).eq(2).then($el => $el.trigger('click')))
                cy.wait(1000)
                cy.LeadForm('web_india_BTECH_HomePage')
            })
        })
    })