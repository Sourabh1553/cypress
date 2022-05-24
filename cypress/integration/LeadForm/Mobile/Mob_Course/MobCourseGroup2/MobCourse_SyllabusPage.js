    describe('Mob Course Syllabus Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.course_syllabus)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.course_syllabus)
                }
            })
        })
    
        it('Apply now- Footer - MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.scrollTo(0,10)
                cy.get(data.mob_sa_downloadguide_btn).click()
                cy.LeadForm('mob_india_MBBS')
            })        
        })
    
        it('Check eligibility- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                    cy.scrollTo(0,10)
                    cy.get(data.mob_sa_free_counselling).click()
                    cy.LeadForm('mob_india_MBA')
            })
        })
    
        it('Download brochure- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.scrollTo(0,10)
                cy.waitUntil(() => cy.get(data.mob_course_follow_btn).then($el => $el.trigger('click')))
                cy.LeadForm('mob_india_Btech')
            })
        })
    })