describe('Verify Elements and page structure- Exam Group 1', () => {
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

    it('Exam Management Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_management)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_management)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam SA Exams Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_SAexams)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_SAexams)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam dental Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_dental)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_dental)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam btech Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_btech)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_btech)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam bds Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_bds)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_bds)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam science Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_science)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_science)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam Computer Applications Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_compApps)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_compApps)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam Law Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_law)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_law)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam Education Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_education)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_education)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    }) 

    it('Exam Pharmacy Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_pharmacy)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_pharmacy)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })
    
    it('Exam Arts Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_arts)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_arts)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Medical Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_medical)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_medical)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam design Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_design)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_design)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Agriculture Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_agri)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_agri)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Hotel Management Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_hotelMan)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_hotelMan)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Paramedics Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_paramed)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_paramed)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Veterinary Science Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_vetScience)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_vetScience)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Mass Communincation Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_massComm)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_massComm)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam Vocational Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_vocational)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_vocational)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,null);
    })

    it('Exam News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_news_page)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_news_page)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_news_headers,null);
        cy.ValidateElement(this.testData.exam_featured_news,null);
        cy.ValidateElement(this.testData.exam_featured_news_heading,'Featured news');
        cy.ValidateElement(this.testData.exam_news_section,null);
        cy.ValidateElement(this.testData.exam_bignews_section,null);
        cy.ValidateElement(this.testData.exam_bignews_section_heading,'The Big Stories');
        cy.ValidateElement(this.testData.exam_morenews_section,null);
        cy.ValidateElement(this.testData.exam_morenews_section_heading,'More NewsNext');
    })
})