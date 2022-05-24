    describe('Mob Course Overview Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.course_overview)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.course_overview)
                }
            })
        })
    
        it('Apply now- Footer - MBBS Form', () =>{
            cy.scrollTo(0,10)
            cy.get('.border-right > .bottom-btn').click()
            cy.LeadForm('mob_india_MBBS')
        }) 

        it('Check eligibility- MBA Form', () =>{
            cy.scrollTo(0,10)
            cy.get('.w-50.d-flex > .btn').click()
            cy.LeadForm('mob_india_MBA')
        })
    
        it('Btech- Ask a Question button', () =>{
            cy.waitUntil(() => cy.get('#lead_btns_0 > .d-flex > .btn-primary').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_QUES')
        })

        it('Btech- Get more info button', () =>{
            cy.waitUntil(() => cy.get('.btn-success-light').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_Btech')
        })

        it('Btech- Follow button', () =>{
            cy.waitUntil(() => cy.get(':nth-child(1) > .card-body > .d-flex > .jsx-1989183395').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_Btech')
        })
    })