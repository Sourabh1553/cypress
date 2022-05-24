describe('Verify Elements and page structure- Country Pages', () => {
    beforeEach(function (){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('xpath').then(function(testData){
            this.testData = testData;
            Cypress.config('defaultCommandTimeout', 5000);
        })
    })

    it('Canada Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.canada)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.canada)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Canada Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    }) 

    it('USA Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.usa)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.usa)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in USA Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('UK Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.uk)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.uk)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in UK Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Australia Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.australia)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.australia)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Australia Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Germany Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.germany)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.germany)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Germany Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Ireland Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.ireland)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.ireland)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Ireland Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Hong-kong Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.hong_kong)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.hong_kong)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Hong Kong Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Singapore Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.singapore)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.singapore)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Singapore Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('New-zealand Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.new_zealand)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.new_zealand)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in New Zealand Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Malaysia Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.malaysia)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.malaysia)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Malaysia Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Sweden Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.sweden)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.sweden)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Sweden Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

    it('Netherlands Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.netherlands)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.netherlands)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_main_heading,'Study in Netherlands Colleges');
        cy.ValidateElement(this.testData.SA_searchbar2,null)
        cy.ValidateElement(this.testData.SA_article_section,null)
        cy.ValidateElement(this.testData.SA_article_section_heading,'Articles Section')
        cy.ValidateElement(this.testData.SA_courseList,null)
        cy.ValidateElement(this.testData.SA_courseList_heading,null)
        cy.ValidateElement(this.testData.SA_uniList,null)
        cy.ValidateElement(this.testData.SA_uniList_heading,null)
    })

})