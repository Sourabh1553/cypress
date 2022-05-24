    describe('Mob Course betch Page- Sanity', () => {
        beforeEach(() => {
                Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.course_btech)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.course_btech)
                }
            })
        })
     
        it('MBBS Form- Mechanical Engineering', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_course_listingPageBtech_btn).eq(0).contains('Apply now').click()
                cy.LeadForm('mob_india_MBBS')
            })
        })

        it('MBA Form- Computer Science Engineering ', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_course_listingPageBtech_btn).eq(1).contains('Apply now').click()
                cy.LeadForm('mob_india_MBA')
            })
        })
    
        it('Btech Form- Civil Engineering', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_course_listingPageBtech_btn).eq(2).contains('Apply now').click()
                cy.LeadForm('mob_india_Btech')
            })
        })
    })