    describe('Courses After 10th Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.course_afterTenth)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.course_afterTenth)
                }
            })
        })
    
        it('MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_one).contains('Apply Now').click()
                cy.LeadForm('web_india_MBBS')
            })
        })
        
        it('MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_two).contains('Apply Now').click()
                cy.LeadForm('web_india_MBA')
            })
        })
    
        it('Btech Form', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_three).contains('Apply Now').click()
                cy.LeadForm('web_india_btech')
            })
        })
    })