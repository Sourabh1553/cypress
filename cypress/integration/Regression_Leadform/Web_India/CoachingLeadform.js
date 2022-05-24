describe('Regression- Coaching Leadform Testcases', () => {
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
    
    it('Apply Now Btn- Leadform with distant course as No and Attend Coaching as No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CoachingForm('web_DistantLearning-No_AttendCoaching-No')
        })
    })

    it('Apply Now Btn- Leadform with distant course as No and Attend Coaching as Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CoachingForm('web_DistantLearning-No_AttendCoaching-Yes')
        })
    })

    it('Apply Now Btn- Leadform with distant course as Yes and Attend Coaching as No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CoachingForm('web_DistantLearning-Yes_AttendCoaching-No')
        })
    })

    it('Apply Now Btn- Leadform with distant course as Yes and Attend Coaching as Yes- Verify Coaching Page', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.course_stream1).click()
            cy.WebRegression_CoachingForm('web_DistantLearning-Yes_AttendCoaching-Yes_VerifyPage')
        })
    })
})