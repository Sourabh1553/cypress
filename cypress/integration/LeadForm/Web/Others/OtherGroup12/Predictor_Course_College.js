    describe('Gate College predictor Page- Sanity', () => {
        beforeEach(() => {
                Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.exam_collegepredictor)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.exam_collegepredictor)
                }
            })
        })
    
        it('MBBS Form- Apply now btn 1', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.predictor_applynow1).click()
                cy.LeadForm('web_india_MBBS')
            })
        })

        it('MBA Form- Apply now btn 2', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.predictor_applynow2).click()
                cy.LeadForm('web_india_MBA')
            })
        })
    
        it('Btech Form- Apply now btn 3', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.predictor_applynow3).click()
                cy.LeadForm('web_india_btech')
            })
        })
    })