describe('Mob Regression- SA Education Preference Page- 2', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.SA_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.SA_list)
            }
        })
    })

    it('Mob Apply Now Btn- Education Preferences Page with EnglishProficiency-Yes_EntranceExam-No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_EduPreferenceForm('mob_EnglishProficiency-Yes_EntranceExam-No')
        })
    }) 

    it('Mob Apply Now Btn- Education Preferences Page with EnglishProficiency-Booked_EntranceExam-No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_EduPreferenceForm('mob_EnglishProficiency-Booked_EntranceExam-No')
        })
    })

    it('Mob Apply Now Btn- Education Preferences Page with EnglishProficiency-No_EntranceExam-Booked', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_EduPreferenceForm('mob_EnglishProficiency-No_EntranceExam-Booked')
        })
    })

    it('Mob Apply Now Btn- Education Preferences Page with EnglishProficiency-Booked_EntranceExam-Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_EduPreferenceForm('mob_EnglishProficiency-Booked_EntranceExam-Yes')
        })
    })

    it('Mob Apply Now Btn- Education Preferences Page with EnglishProficiency-Yes_EntranceExam-Booked', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_EduPreferenceForm('mob_EnglishProficiency-Yes_EntranceExam-Booked')
        })
    })
})