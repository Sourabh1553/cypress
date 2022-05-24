describe('Mob Regression- College Masters Page', () => {
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
    
    it('Mob- Apply Now Btn- Masters Page with Distant button as NO', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-No')
        })
    })

    it('Mob- Apply Now Btn- Masters Page with Distant button as YES', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-Yes')
        })
    })

    it('Mob- Apply Now Btn- Distant button as NO and verify Master with no entrance exam', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-No_noScheduledExams')
        })
    })

    it('Mob- Apply Now Btn- Distant button as NO and verify Master with booked entrance exam', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-No_bookedExams')
        })
    })

    it('Mob- Apply Now Btn- Distant button as NO and verify Master with null values', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-No_VerifyPage')
        })
    })

    it('Mob- Apply Now Btn- Distant button as YES and verify Master with no entrance exam', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-Yes_noScheduledExams')
        })
    })

    it('Mob- Apply Now Btn- Distant button as YES and verify Master with booked entrance exam', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-Yes_bookedExams')
        })
    })

    it('Mob- Apply Now Btn- Distant button as YES and verify Master with null values', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course1_btn).click()
            cy.MobRegression_MastersForm('mob_DistantLearning-Yes_VerifyPage')
        })
    })
})