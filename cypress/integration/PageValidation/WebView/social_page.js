/// <reference types="cypress" />


describe('social page ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    

    it('Page is loaded', () => {

        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.social_homepage)
        })// visit the page 
        cy.url().should('include','/social')//verify whether the page we wanted to visit is opened by checking if url include /social
    })

    it('Category', () => {  //we will verify category section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.social_category).should('be.visible') //verify whether title category is visible or not 
        cy.get(data.social_category_tabs).contains("Lifestyle").should('be.visible') // lifestyle tab is visible or not 
        cy.get(data.social_category_tabs).contains("News").should('be.visible')  // news tab is visible or not 
        cy.get(data.social_category_tabs).contains("Travel").should('be.visible')  // travel tab is visible or not 
        cy.get(data.social_category_tabs).contains("Infotainment").should('be.visible')  // infotainment tab is visible or not 
        cy.get(data.social_category_tabs).contains("College").should('be.visible')  // college tab is visible or not 
        cy.get(data.social_category_tabs).contains("Entertainment").should('be.visible')  // Entertainment tab is visible or not 
        
    })
        
    })

    it('Verify whether clicking on lifestyle category takes to the filtered page ', () => { // checking if lifestyle filter is getting applied or not 
        
        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_category_tabs).contains("Lifestyle").click() // click on lifestyle filter to apply 
        cy.url().should('include',"/social?category=lifestyle") // verify whether filter is applied from url
        cy.get(data.social_category_filter_remove).click() //remove the filter
        cy.url().should('include','/social') //check whether filter is removed  
        })
    }) 

    it('Verify whether clicking on news category takes to the filtered page ', () => { // same as lifestyle filter

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_category_tabs).contains("News").click()
        cy.url().should('include',"/social?category=news")
        cy.get(data.social_category_filter_remove).click()
        cy.url().should('include','/social')
        })
    })

    it('Verify whether clicking on Travel category takes to the filtered page ', () => { // same as lifestyle filter

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_category_tabs).contains("Travel").click()
        cy.url().should('include',"/social?category=travel")
        cy.get(data.social_category_filter_remove).click()
        cy.url().should('include','/social')
        })
    })

    it('Verify whether clicking on Infotainment category takes to the filtered page ', () => { // same as lifestyle filter

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_category_tabs).contains("Infotainment").click()
        cy.url().should('include',"/social?category=infotainment")
        cy.get(data.social_category_filter_remove).click()
        cy.url().should('include','/social')
        })
    })

    it('Verify whether clicking on College category takes to the filtered page ', () => { // same as lifestyle filter

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_category_tabs).contains("College").click()
        cy.url().should('include',"/social?category=college")
        cy.get(data.social_category_filter_remove).click()
        cy.url().should('include','/social')
        })
    })

    it('Verify whether clicking on Entertainment category takes to the filtered page ', () => { // same as lifestyle filter

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_category_tabs).contains("Entertainment").click()
        cy.url().should('include',"/social?category=entertainment")
        cy.get(data.social_category_filter_remove).click()
        cy.url().should('include','/social')
        })
    })

    it('filter Result', () => { // we first check middle column and then apply filter and then check middle column

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_middle_column) //middle  column
        cy.get(data.social_middle_column_first_article).first().click()  //middle column first normal article is clicked 
        cy.get(data.social_middle_column_first_article_clicked_homeicon) // verify whether the article is clicked by verifying the home icon present with the clicked article name 
        cy.go('back') // come back to the previous home page 
        cy.get(data.social_middle_column_first_article_title).first().should('be.visible') // first normal article title is present or not 
        cy.get(data.social_middle_column_first_article_date_author).first().should('be.visible') // date and author of first normal article is present and visible 
        cy.get(data.social_middle_column_first_article_share_icon).first().should('be.visible') // share icon of first normal article 
        cy.get(data.social_category_tabs).contains("Lifestyle").click() // click on lifestyle filter
        cy.url().should('include',"/social?category=lifestyle") // verify if the filter is applied or not by url
        cy.get(data.social_filter_middle_column).should('be.visible') //when filter is applied the middle column is visible or not 
        cy.get(data.social_filter_middle_column_first_article).first() // when filter is applied the middle column first article is present
        cy.get(data.social_filter_middle_column_first_article_title).should('be.visible') //  first article title is visible or not 
        cy.get(data.social_filter_middle_column_first_article_date_author).should('be.visible') // first article author and date is visible or not 
        cy.get(data.social_filter_middle_column_first_article_share_icon).should('be.visible') // first article share icon is present  or not 
        cy.get(data.social_category_filter_remove).click() // remove the filter
        cy.url().should('include','/social')
        })
    })


    it('Trending now section', () => { // trending now section 

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_trending_column).should('be.visible') // trending now column
        cy.get(data.social_trending_text).contains('Trending Now') //trending now text is present
        cy.get(data.social_trending_first_article).first().click() // trending now first article is there and clicked
        cy.get(data.social_trending_first_article_clicked_homeicon) //home icon after clicking first article
        cy.go('back')
        cy.get(data.social_trending_first_article_title).first().should('be.visible') //trending now first article title
        cy.get(data.social_trending_first_article_author).first().should('be.visible') // trending now first article author
        cy.get(data.social_trending_first_article_share_icon).first().should('be.visible') // trending now first article share icon
        })
    })

    it('Pagination', () => { // pagination section

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_pagination_section).should('be.visible') // pagination section 
        cy.get(data.social_pagination_page_number).contains('1')//first page button is present and focused
        cy.get(data.social_pagination_second_page_clicked).contains('2').click() // second button present and clicked
        cy.url().should('include','/social/page-2') // verify if it has reached second page 
        cy.get(data.social_pagination_page_number).contains('2') // verify if page 2 is focused
        })
    })

})