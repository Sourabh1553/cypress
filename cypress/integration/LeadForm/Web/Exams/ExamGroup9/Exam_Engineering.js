    describe('Exam- engineering Page- Sanity', () => {
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
    
        it('MBBS Form- exam-1', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_1).click()
                cy.LeadForm('web_india_MBBS')
            })
        })

        it('MBA Form- exam-2', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_2).click()
                cy.LeadForm('web_india_MBA_MBBSpage')
            })
        })
     
        it('Btech Form- exam-3', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_3).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
    
        it('Btech Form- exam-4', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_4).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
    })