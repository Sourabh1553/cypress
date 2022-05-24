describe('Single College Review Page- Sanity', () => {
    beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.college_singleReview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.college_singleReview)
            }
        })
    })

    it('MBBS Form', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.col_writereview).click()
            cy.LeadForm('web_india_MBBS')
        })
    })

    it('MBA Form', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.col_writereview).click()
            cy.LeadForm('web_india_MBA')
        })
    })

    it('Btech Form', () => {
        cy.fixture('xpath').then((data)=>{
            cy.get(data.col_writereview).click()
            cy.LeadForm('web_india_btech')
        })
    })    
})