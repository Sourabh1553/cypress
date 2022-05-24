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
    
    it('Apply Now Btn- Verify past experience page with passport as Yes', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_PastEdu_UGForm('web_VerifyPage_Passport-Yes')
        })
    }) 

    it('Apply Now Btn- Past experience page with passport as No', () =>{
        cy.fixture('xpath').then((data)=>{
            cy.get(data.SA_applynow2).click()
            cy.WebRegressionSA_PastEdu_UGForm('web_Passport-No')
        })
    }) 
})