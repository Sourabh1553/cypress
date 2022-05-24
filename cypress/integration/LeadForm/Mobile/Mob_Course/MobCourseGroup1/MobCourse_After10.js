    describe('Mob Courses After 10th Page- Sanity', () => {
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
                cy.scrollTo(0,10)
                cy.get(data.mob_course_applynow1_btn).click()
                cy.LeadForm('mob_india_MBBS')
            })
        })
        
        it('MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.scrollTo(0,10)
                cy.get(data.mob_course_applynow2_btn).click()
                cy.LeadForm('mob_india_MBA')
            })
        })
    
        it('Btech Form', () => {
            cy.fixture('xpath').then((data)=>{
                cy.scrollTo(0,10)
                cy.get(data.mob_course_applynow3_btn).click()
                cy.LeadForm('mob_india_btech')
            })
        })
    })