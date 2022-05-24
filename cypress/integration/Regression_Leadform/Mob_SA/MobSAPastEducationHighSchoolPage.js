describe('Mob Regression- SA Education Preference Page', () => {
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
    
    it('Mob- Apply Now Btn- Verify past experience page with passport as No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_PastEdu_HighSchoolForm('mob_VerifyPage_Passport-No')
        })
    }) 

    it('Mob- Apply Now Btn- Verify past experience page with passport as Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_sacol_applynow2_btn).click()
            cy.MobRegressionSA_PastEdu_HighSchoolForm('mob_Passport-Yes')
        })
    }) 
})