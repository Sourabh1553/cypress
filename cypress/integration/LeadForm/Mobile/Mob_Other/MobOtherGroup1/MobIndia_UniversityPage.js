    describe('Mob India-University Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.indiaUniveristy)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.indiaUniveristy)
                }
            })
        })
    
        it('Apply now- MBBS Form', () =>{
            cy.get(':nth-child(1) > .jsx-652291074 > .college-card-container > .apply-action > .apply-btn').click()
            cy.LeadForm('mob_india_MBBS')
        })

        it('Download Brochure- MBA Form', () =>{
            cy.get(':nth-child(1) > .jsx-652291074 > .college-card-container > .apply-action > .btn-light').click()
            cy.LeadForm('mob_india_MBA')
        })
    
        it('Apply now-2 -Btech Form', () => {
            cy.get(':nth-child(2) > .jsx-652291074 > .college-card-container > .apply-action > .apply-btn').click()
            cy.LeadForm('mob_india_BTECH')
        })
    })