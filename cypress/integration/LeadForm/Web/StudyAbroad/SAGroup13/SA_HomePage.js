    describe('Study Abroad Home Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SAHome)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SAHome)
                }
            })
        }) 
    
        // it('MBA Form- Apply now', () =>{
        //     cy.get(':nth-child(1) > .listing-block > div.align-items-center > .clg-apply').should('be.visible').click()
        //     cy.wait(1000)
        //     cy.LeadForm('web_SA_MBBS')
        // })
        
        // it('MBA Form- Apply now', () =>{
        //     cy.get(':nth-child(1) > .listing-block > div.align-items-center > .clg-brochure').click()
        //     cy.LeadForm('web_SA_MBA')
        // })
    
        // it('Btech Form-Apply now', () => {
        //     cy.get(':nth-child(2) > .listing-block > div.align-items-center > .clg-apply').click()
        //     cy.LeadForm('web_SA_Btech')
        // })
    })