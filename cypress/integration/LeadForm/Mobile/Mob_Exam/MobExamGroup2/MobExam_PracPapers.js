    describe('Mob Exam PracPapers Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.exam_pracpaper)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.exam_pracpaper)
                }
            })
        })
    
        it('Apply now- Footer - BCA Form- Coaching form with specialization', () =>{
            cy.scrollTo(0,10)
            cy.get('.border-right > .bottom-btn').click()
            cy.LeadForm('mob_india_BCA')
        })

        it('Apply now- Footer - MBBS Form- Coaching form with specialization', () =>{
            cy.scrollTo(0,10)
            cy.get('.border-right > .bottom-btn').click()
            cy.LeadForm('mob_india_MBBS')
        })
        
        it('Check eligibility- MBA Form', () =>{
            cy.scrollTo(0,10)
            cy.get('.w-50.d-flex > .btn').click()
            cy.LeadForm('mob_india_MBA_MBBSPage')
        })
    
        it('News button- Btech Form', () =>{
            cy.waitUntil(() => cy.get(':nth-child(1) > .exam-news-container > .exam-news-content > .float-right > .jsx-1139490189 > svg > path').should('be.visible').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_btech_MBBSpage')
        })
    })