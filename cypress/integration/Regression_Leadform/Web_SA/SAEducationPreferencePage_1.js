describe('Regression- SA Education Preference Page', () => {
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
    
    it('Apply Now Btn- Education Preferences Page with EnglishProficiency-No_EntranceExam-No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_EduPreferenceForm('web_EnglishProficiency-No_EntranceExam-No')
        })
    }) 

    it('Apply Now Btn- Education Preferences Page with EnglishProficiency-Yes_EntranceExam-Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_EduPreferenceForm('web_EnglishProficiency-Yes_EntranceExam-Yes')
        })
    }) 

    it('Apply Now Btn- Education Preferences Page with EnglishProficiency-Booked_EntranceExam-Booked', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_EduPreferenceForm('web_EnglishProficiency-Booked_EntranceExam-Booked')
        })
    }) 

    it('Apply Now Btn- Education Preferences Page with EnglishProficiency-No_EntranceExam-Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_EduPreferenceForm('web_EnglishProficiency-No_EntranceExam-Yes')
        })
    })  

    it('Apply Now Btn- Verify fields in education preferences', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_EduPreferenceForm('web_VerifyEduPrefPage')
        })
    }) 
})