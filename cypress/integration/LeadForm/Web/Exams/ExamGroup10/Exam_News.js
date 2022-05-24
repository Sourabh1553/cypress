    describe('Exam News Page- Sanity', () => {
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
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_newsarticle1_btn).click()
                cy.LeadForm('web_india_MBBS')
            })
        })
        
        it('News article- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_newsarticle2_btn).click()
                cy.LeadForm('web_india_MBA_MBBSpage')
            })
        })
    
        it('News article- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_newsarticle3_btn).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
    })