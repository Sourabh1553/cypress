    describe('Mob Exam News Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.exam_news)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.exam_news)
                }
            })
        })
    
        it('News article- MBBS Form', () =>{
            cy.get(':nth-child(1) > .exam-news-container > .exam-news-content > .float-right > .jsx-1139490189 > svg').click()
            cy.LeadForm('mob_india_MBBS')
        })
        
        it('News article- MBA Form', () =>{
            cy.get(':nth-child(2) > .exam-news-container > .exam-news-content > .float-right > .jsx-1139490189 > svg > path').click()
            cy.LeadForm('mob_india_MBA_MBBSpage')
        })
    
        it('News article- Btech Form', () =>{
            cy.get(':nth-child(3) > .exam-news-container > .exam-news-content > .float-right > .jsx-1139490189 > svg > path').click()
            cy.LeadForm('mob_india_Btech_MBBSpage')
        })
    })