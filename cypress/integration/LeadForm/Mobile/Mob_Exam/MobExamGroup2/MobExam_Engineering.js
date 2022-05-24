    describe('Mob Exam- engineering Page- Sanity', () => {
        beforeEach(() => {
                Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.exam_engineer)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.exam_engineer)
                }
            })
        })
    
        it('Exam-1 - MBBS Form', () =>{
            cy.get(':nth-child(2) > .piped-links > .btn').click()
            cy.LeadForm('mob_india_MBBS')
        })

        it('Exam-2 - MBA Form', () =>{
            cy.get(':nth-child(4) > .piped-links > .btn').click()
            cy.LeadForm('mob_india_MBA_MBBSPage')
        })
    
        it('Exam-3 - Btech Form', () =>{
            cy.get(':nth-child(5) > .piped-links > .btn').click()
            cy.LeadForm('mob_india_btech_MBBSpage')
        })
    })