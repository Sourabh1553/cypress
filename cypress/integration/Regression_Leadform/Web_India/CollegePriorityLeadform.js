describe('Regression- College Priority Page', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv") =='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.log(Cypress.env("prod"))
                cy.visit(Cypress.env("prod")+data.course_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.log(Cypress.env("stage"))
                cy.visit(Cypress.env("stage")+data.course_list)
            }  
        })
    }) 
    
    it('Apply Now Btn- College Priority Page with 0 colleges', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CollegePriorityForm('web_DistantLearning-No_noCollege')
        })
    }) 

    it('Apply Now Btn- Verify College Priority Page with status as interested', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CollegePriorityForm('web_DistantLearning-No_statInterested')
        })
    })

    it('Apply Now Btn- Verify College Priority Page with status as awaiting result', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CollegePriorityForm('web_DistantLearning-No_statAwaitingResult')
        })
    })

    it('Apply Now Btn- Verify College Priority Page with status as applied', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CollegePriorityForm('web_DistantLearning-No_VerifyPage')
        })
    })

    it('Apply Now Btn- College Priority Page with multiple colleges and empty status and appication field', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CollegePriorityForm('web_DistantLearning-No_applicationStat')
        })
    })

    it('Apply Now Btn- College Priority Page with multiple colleges and change priorities of colleges', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CollegePriorityForm('web_DistantLearning-No_addCollege')
        })
    })
})