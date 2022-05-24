    describe('Study Abroad College Program Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_program)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_program)
                }
            })
        })
    
        it('MBA Form-Like button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_header_like_btn).click()
                cy.LeadForm('web_SA_MBA')
            })
        })
         
        it('MBA Form- Get Free Counselling Button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_getfreecouselling3_btn).click()
                cy.LeadForm('web_SA_MBA')
            })
        })

        it('Btech Form- Check detailed fees', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get('.btn.btn-link.text-primary').eq(0).contains('Check Detailed Fees').click()
                cy.LeadForm('web_SA_Btech')
            })
        })

        it('Btech Form- Download brochure(PGPM)', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_db_course1_btn).click()
                cy.LeadForm('web_SA_Btech')
            })
        })
    })