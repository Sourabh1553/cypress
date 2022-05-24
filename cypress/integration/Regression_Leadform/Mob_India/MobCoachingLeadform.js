describe('Mob Regression- Coaching Leadform Testcases', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.course_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.course_list)
            }
        })
    })
    
    it('Mob- Apply Now Btn- Leadform with distant course as No and Attend Coaching as No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CoachingForm('mob_DistantLearning-No_AttendCoaching-No')
        })
    })

    it('Mob- Apply Now Btn- Leadform with distant course as No and Attend Coaching as Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CoachingForm('mob_DistantLearning-No_AttendCoaching-Yes')
        })
    })

    it('Mob- Apply Now Btn- Leadform with distant course as Yes and Attend Coaching as No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CoachingForm('mob_DistantLearning-Yes_AttendCoaching-No')
        })
    })

    it('Mob- Apply Now Btn- Leadform with distant course as Yes and Attend Coaching as Yes- Verify Coaching Page', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CoachingForm('mob_DistantLearning-Yes_AttendCoaching-Yes_VerifyPage')
        })
    })
})