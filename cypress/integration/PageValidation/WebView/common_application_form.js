/// <reference types="cypress" />


describe('Common Application Form ', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    

    it('Page is loaded', () => {
        
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.common_application_form)
        })// visit the page 
        cy.url().should('include','/common-application-form')//verify whether the page we wanted to visit is opened by checking if url include 
    })


    it('Intro Section', () => {  //we will verify intro section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.CAF_intro_section).should('be.visible') //verify whether intro section is visible or not 
        cy.get(data.CAF_intro_heading).contains(" COMMON APPLICATION FORM ").should('be.visible') // intro heading is visible or not 
        cy.get(data.CAF_intro_text).should('be.visible')  // intro text is visible or not 
        cy.get(data.CAF_intro_search_box).type("bharat")  // search tab is visible or not 
        cy.get(data.CAF_intro_search_result).should('be.visible')  // search result is visible or not 
        cy.get(data.CAF_intro_search_result_addtocart).contains("Add to Cart").click()  // click add to cart button
        cy.url().should('include','/caf-college/13047-bharat-institute-of-technology-bit?') //add to card button opens bharat college page apply page
        cy.go('back')   // go back to caf page      
        })
    })

    it('Process Section', () => {  //we will verify process section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.CAF_process_section).should('be.visible') //verify whether process section is visible or not 
        cy.get(data.CAF_process_heading).contains(" How to Apply ").should('be.visible') // process heading is visible or not 
        cy.get(data.CAF_process_content).should('be.visible')  // process content is visible or not 
        cy.get(data.CAF_process_content_items).contains("Choose Preferred Colleges")  // Choose Preferred Colleges is visible or not 
        cy.get(data.CAF_process_content_items).contains("Choose Preferred Stream")  // Choose Preferred Stream is visible or not 
        cy.get(data.CAF_process_content_items).contains("Fill Form Details")  // Fill Form Details is visible or not 
        cy.get(data.CAF_process_content_items).contains("Make Payment")  // Make Payment is visible or not 
        })
    })


    it('Listing filter Section', () => {  //we will verify Listing section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.CAF_listing_section).should('be.visible') //verify whether listing section is visible or not 
        cy.get(data.CAF_listing_heading).contains("TOP COLLEGES").should('be.visible') // listing heading top colleges is visible or not 
        cy.get(data.CAF_listing_filters_column).should('be.visible')  // listing filter column is visible or not 
        cy.get(data.CAF_listing_filters_headings).contains("Course")  // course filter heading is visible or not 
        cy.get(data.CAF_listing_filters_headings).contains("State")  // state filter heading is visible or not 
        cy.get(data.CAF_listing_filters_headings).contains("City")  // city filter heading is visible or not 
        cy.get(data.CAF_listing_filters_search_box).eq(0).should('have.attr', 'placeholder', 'Find Course').type("BCA")  // course search box is visible or not 
        cy.get(data.CAF_listing_filters_search_result).eq(0).click()  //  click on BCA filter
        cy.url().should('include','/common-application-form?course=16') // check url if bca filter is applied or not
        cy.go("back") // go back to CAF page
        cy.url().should('not.include','?course=16') //check if CAF page is opened
        cy.get(data.CAF_listing_filters_search_box).eq(1).should('have.attr', 'placeholder', 'Find State').type("punjab")  // state search box is visible or not 
        cy.get(data.CAF_listing_filters_search_result).contains("Punjab").click()  // click on punjab filter 
        cy.url().should('include','/common-application-form?state=28') // check url if punjab filter is applied or not
        cy.go("back") //  go back to CAF page
        cy.url().should('not.include','?state=28') //check if CAF page is opened
        cy.get(data.CAF_listing_filters_search_box).eq(2).should('have.attr', 'placeholder', 'Find City').type("meerut")  // city search box is visible or not 
        cy.get(data.CAF_listing_filters_search_result).contains("Meerut").click()  // click on jhalandar filter 
        cy.url().should('include','/common-application-form?city=557') //check url if jhalandar filter is applied or not
        cy.go("back") //  go back to CAF page
        cy.url().should('not.include','?city=423') //check if CAF page is opened
        
        })

    })

    it('Listing colleges Section', () => {  //we will verify Colleges section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.CAF_colleges_section).should('be.visible') //verify whether Colleges section is visible or not 
        cy.get(data.CAF_college_card).eq(0).should('be.visible') // College card is visible or not 
        cy.get(data.CAF_college_image).eq(0).should('be.visible')  // college image is visible or not 
        cy.get(data.CAF_college_name).eq(0).contains("Bharat Institute of Technology - [BIT]").should('be.visible') // college name is visible or not 
        cy.get(data.CAF_college_fees).eq(0)  // application fees is visible or not 
        cy.get(data.CAF_college_application_fees_and_course_text).eq(0).contains("Application Fees")  // application fees text is visible or not 
        cy.get(data.CAF_college_fees).eq(1)  // course fees is visible or not 
        cy.get(data.CAF_college_application_fees_and_course_text).eq(1).contains("BBA/BBM")  // course fees text is visible or not
        cy.get(data.CAF_colege_addtocart).eq(0).contains("Add to Cart").click()  // add to cart button is present or not
        cy.get(data.CAF_college_added).eq(0).contains("Added").click()  // added button is present or not
        })
    })

    it('counselling Section', () => {  //we will verify Counselling section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.CAF_counselling_section).should('be.visible') //verify counselling section is visible or not 
        cy.get(data.CAF_counselling_heading).eq(0).contains("COLLEGE TESTIMONIALS").should('be.visible') // counselling section heading is visible or not 
        cy.get(data.CAF_counselling_subheading).eq(0).contains("What colleges says about us!").should('be.visible')  // counselling subheading is visible or not 
        cy.get(data.CAF_counselling_card).eq(0).should('be.visible') // counselling card is visible or not 
        cy.get(data.CAF_counselling_image).eq(0).should('be.visible')   // card image is visible or not 
        cy.get(data.CAF_counselling_card_text).eq(0).should('be.visible') // card text is visible or not 
        })
    })

    it('Student testimonial Section', () => {  //we will verify student testimonial section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.CAF_testimonial_section).should('be.visible') //verify testimonial section is visible or not 
        cy.get(data.CAF_counselling_heading).eq(1).contains("STUDENT TESTIMONIALS").should('be.visible') // testimonial section heading is visible or not 
        cy.get(data.CAF_counselling_subheading).eq(1).contains("What our students say!").should('be.visible')  // Testimonial subheading is visible or not 
        cy.get(data.CAF_testimonial_card).eq(0).should('be.visible') // testimonial card is visible or not 
        cy.get(data.CAF_testimonial_card_text).eq(1).should('be.visible')   // card text is visible or not 
        cy.get(data.CAF_testimonial_student).eq(0).should('be.visible') // card text is visible or not 
        })
    })


})