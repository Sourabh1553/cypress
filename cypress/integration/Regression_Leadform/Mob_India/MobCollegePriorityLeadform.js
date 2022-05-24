describe('Mob Regression- College Priority Page', () => {
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
    
    it('Mob- Apply Now Btn- College Priority Page with 0 colleges', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CollegePriorityForm('mob_DistantLearning-No_noCollege')
        })
    }) 

    it('Mob- Apply Now Btn- Verify College Priority Page with status as interested', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CollegePriorityForm('mob_DistantLearning-No_statInterested')
        })
    })

    it('Mob- Apply Now Btn- Verify College Priority Page with status as awaiting result', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CollegePriorityForm('mob_DistantLearning-No_statAwaitingResult')
        })
    })

    it('Mob- Apply Now Btn- Verify College Priority Page', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CollegePriorityForm('mob_DistantLearning-No_VerifyPage')
        })
    })

    it('Mob- Apply Now Btn- College Priority Page with multiple colleges and empty status and appication field', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CollegePriorityForm('mob_DistantLearning-No_applicationStat')
        })
    })

    it('Mob- Apply Now Btn- College Priority Page with multiple colleges and change priorities of colleges', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_CollegePriorityForm('mob_DistantLearning-No_addCollege')
        })
    })
})