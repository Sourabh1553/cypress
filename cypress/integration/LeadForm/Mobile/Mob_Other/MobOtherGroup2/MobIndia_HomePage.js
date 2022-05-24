describe('Mob CollegeDunia-Home Page- Sanity', () => {
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

    // it('Apply now- MBBS Form', () =>{
    //     cy.get('.snap-card-body.snap-card-body-sm').eq(0).contains('Download Brochure').click({force:true})
    //     cy.LeadForm('mob_india_MBBS')
    // })

    // it('Download Brochure- MBA Form', () =>{
    //     cy.get('.snap-card-body.snap-card-body-sm').eq(1).contains('Download Brochure').click()
    //     cy.LeadForm('mob_india_MBA')
    // })

    // it('Apply now-2 -Btech Form', () => {
    //     cy.get('.snap-card-body.snap-card-body-sm').eq(2).contains('Download Brochure').click()
    //     cy.LeadForm('mob_india_BTECH')
    // })
})