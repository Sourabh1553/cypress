/// <reference types="cypress" />


describe('Rating Page ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    

    it('Page is loaded', () => {
        
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.rating)
        })// visit the page 
        cy.url().should('include','/nps?p=N3hCNUY5VHJVcm5kYlFmQjRaeVJ5UT09&det=cDVkL3c1eFFicHFwUDBFcEViczE4ZmlFNEFNNTBDU2V0bFZYVmRQMzhxK0VWMnAySHU2eloyN2lOSHZyano0N055K080UWt2TytQTjBHQmZFczZIOGc9PQ==')//verify whether the page we wanted to visit is opened by checking if url include /social
    })
    
    
    it('Rating section', () => {  //we will verify rating section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.rating_section).should('be.visible') //verify whether rating section is visible or not 
        cy.get(data.rating_collegedunia_icon).should('be.visible') // Collegedunia icon is visible or not 
        cy.get(data.rating_collegedunia_icon).click()  // click collegedunia icon
        cy.url().should('include','/?utm_source=nps&utm_medium=logo')// verify whether it takes us to homepage
        cy.go("back")// go back to rating page 
        cy.get(data.rating_section_text).contains("How likely are you to recommend collegedunia.com to a friend or a colleague?").should('be.visible')  // how likely text is present or not
        cy.get(data.rating_section_ratings).should('be.visible')  // ratings are visible or not 
        cy.get(data.rating_section_numbers).contains("1").should('be.visible')  // 1 rating is visible or not 
        cy.get(data.rating_section_rating_likey_text).contains("Not so likely").should('be.visible') // not so likely text below 1 is visible or not 
        cy.get(data.rating_section_numbers).contains("2").should('be.visible') // 2 is visible or not 
        cy.get(data.rating_section_numbers).contains("3").should('be.visible') // 3 is visible or not 
        cy.get(data.rating_section_numbers).contains("4").should('be.visible') // 4 is visible or not 
        cy.get(data.rating_section_numbers).contains("5").should('be.visible') // 5 is visible or not 
        cy.get(data.rating_section_numbers).contains("6").should('be.visible') // 6 is visible or not 
        cy.get(data.rating_section_numbers).contains("7").should('be.visible') // 7 is visible or not 
        cy.get(data.rating_section_numbers).contains("8").should('be.visible') // 8 is visible or not 
        cy.get(data.rating_section_numbers).contains("9").should('be.visible') // 9 is visible or not 
        cy.get(data.rating_section_numbers).contains("10").should('be.visible') // 10 is visible or not 
        cy.get(data.rating_section_rating_likey_text).contains("Highly Likely").should('be.visible') // highly likely text is visible or not 
        
    })

    })

    it('Verify whether clicking on number 1 openes the improvement form ', () => { // checking if lifestyle filter is getting applied or not 
        
        cy.fixture('xpath').then((data)=>{
        cy.get(data.rating_section_numbers).contains("1").click() // click on any rating from 1 to 9 to see improvement form
        cy.get(data.rating_improvement_text).contains("What feature do you think we need to improve the most on?").should('be.visible')  // What feature do you think we need to improve the most on? is present or not
        cy.get(data.rating_improvement_option_section)// What need to improve options are present or not
        cy.get(data.rating_improvement_options).contains("Website Design") // website design option is present or not  
        cy.get(data.rating_improvement_options).contains("Content Accuracy") // Content Accuracy option is present or not  
        cy.get(data.rating_improvement_options).contains("Content Quality") // Content Quality option is present or not  
        cy.get(data.rating_improvement_options).contains("Readability") // Readability option is present or not  
        cy.get(data.rating_improvement_options).contains("Website Load Time") // Website Load Time option is present or not  
        cy.get(data.rating_improvement_options).contains("Other") // Other option is present or not  
        cy.get(data.rating_improvement_options_radio).first()//options radio button is visible or not 
        cy.get(data.rating_improvement_comment_box).should('be.visible') // comment box is visible or not 
        cy.get(data.rating_improvement_submit).contains("Submit").should('be.visible') //submit button
        })
    }) 

    it('Submit the improvement form', () => { // form is getting submitted or not  
        
        cy.fixture('xpath').then((data)=>{
        cy.get(data.rating_section_numbers).contains("1").click() // click on option 1
        cy.get(data.rating_improvement_options_radio).first().click() // click on website design
        cy.get(data.rating_improvement_comment_box).type('its good just need to enter something to submit the form') // comment in the box
        cy.get(data.rating_improvement_submit).contains("Submit").click() // click on submit button
        cy.get(data.rating_improvement_submit_response).contains("Thanks for submitting your response. Your feedback is highly appreciated.") // verify form is submitted
        })
    }) 


})