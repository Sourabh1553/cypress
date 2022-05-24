/// <reference types="cypress" />


describe('Profile Page ', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    

    it('Page is loaded', () => {
                
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.profile_page)
        })// visit the page 
        cy.url().should('include','/profile/66085-perindha-valli#academics-section')//verify whether the page we wanted to visit is opened by checking if url include 
    })
    
    
    it('whole page', () => {  //we will verify rating section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.profile_profile_section).should('be.visible') //verify whether rating section is visible or not 
        //cy.get(data.profile_profile_section_icon)  // profile icon is visible or not 
        cy.get(data.profile_profile_section_name).should('be.visible')  // profile name is visible or not
        cy.get(data.profile_profile_section_university_experience).first() // university applied is present or not
        cy.get(data.profile_profile_section_university_experience).last()  // Academic experience is present or not
        cy.get(data.profile_scorecard_section).should('be.visible')  // scorecard section is present or not
        cy.get(data.profile_scorecard_card).should('be.visible')  // scorecard 1st card is present or not
        cy.get(data.profile_university_and_experience_section).first().should('be.visible')  // university applied section is present or not
        cy.get(data.profile_university_applied_heading).contains("Universities Applied").should('be.visible')  // university applied section heading is present or not
        cy.get(data.profile_university_applied_sort_section).should('be.visible')  // university applied section sort by section is present or not
        cy.get(data.profile_university_applied_sort_section_name).contains("Sort By: ").should('be.visible')  // university applied section sort by name is present or not
        cy.get(data.profile_university_applied_sort_section_all_filter).contains("all").should('be.visible')  // university applied section sort by all filter is present or not
        cy.get(data.profile_university_applied_sort_section_admitted_filter).contains("admitted").should('be.visible')  // university applied section sort by admitted is present or not
        cy.get(data.profile_university_applied_universities_section).first().should('be.visible')  // universities section is present or not
        cy.get(data.profile_university_applied_university_name).first().should('be.visible')  // university name is present or not
        cy.get(data.profile_university_applied_university_course_name).first().should('be.visible')  // university course name is present or not
        cy.get(data.profile_university_applied_university_admitted_tag).should('be.visible')  // university admitted tag is present or not
        cy.get(data.profile_university_and_experience_section).last().should('be.visible')  // academic experience section is present or not
        cy.get(data.profile_academic_experience_heading).contains("Academics & Work Experience").should('be.visible')  // academic experience heading section is present or not
        cy.get(data.profile_academic_experience_details_heading).contains("Undergrad Details").should('be.visible')  // academic experience section details heading is present or not
        cy.get(data.profile_academic_experience_course_and_score).contains("Computer Science").should('be.visible')  // academic experience section course name is present or not
        cy.get(data.profile_academic_experience_course_and_score).contains("8.62").should('be.visible')  // academic experience section score text is present or not
        cy.get(data.profile_academic_experience_college_and_score_text).first().should('be.visible')  // academic experience section college name is present or not
        cy.get(data.profile_academic_experience_college_and_score_text).contains("Aggregate score and pattern").should('be.visible')  // academic experience section score text is present or not 
    })

    })
    

})