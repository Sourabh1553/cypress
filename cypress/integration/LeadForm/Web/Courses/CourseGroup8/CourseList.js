    describe('Courses List Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.course_list)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.course_list)
                }
            })
        })
    
        it('Apply Now btn1- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_stream1).click()
                cy.LeadForm('web_india_MBBS')
            })
        })

        it('Apply Now btn2- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_stream2).click()
                cy.LeadForm('web_india_MBA')
            })
        })
    
        it('Apply Now btn3- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_stream4).click()
                cy.LeadForm('web_india_btech')
            })
        })
    })