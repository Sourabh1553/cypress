    describe('Exam Books Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.exam_books)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.exam_books)
                }
            })
        })

        it('Get more info- BCA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_getmoreinfo).click()
                cy.LeadForm('web_india_BCA')
            })
        }) 
    
        it('Get more info- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_getmoreinfo).click()
                cy.LeadForm('web_india_MBBS')
            })
        }) 

        it('Sample papers- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_samplepaper).click()
                cy.LeadForm('web_india_MBA_MBBSpage')
            })
        })
    
        it('Ask a question- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_askaquestion).click()
                cy.LeadForm('web_india_QUES_MBBSpage')
            })
        })
    
        it('Btech- News like button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_newslike_btn).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })    
    })