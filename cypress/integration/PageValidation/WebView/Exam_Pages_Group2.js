describe('Verify Elements and page structure- Exam Group 2', () => {
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

    it('Exam Books Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_books)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_books)
            }
        })  
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    }) 

    it('Exam Cutoff Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_cutoff)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_cutoff)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    }) 

    it('Exam Dates Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_dates)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_dates)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    }); 

    it('Exam Engineering Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_engineer)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_engineer)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.exam_filter_nav,null);
        cy.ValidateElement(this.testData.exam_list_wrapper,null);
        cy.ValidateElement(this.testData.exam_page_wrapper,null);
        cy.ValidateElement(this.testData.exam_apply_now_btn,'APPLY NOW');
    }) 

    it('Exam Overview Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_overview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_overview)
            }
        })
        cy.commonPageElementVal();
        cy.commonExamPageElementVal();
        cy.flexButtons();
        cy.newsCommentExamPage('MustSeeNews');
        cy.ValidateElement(this.testData.exam_fee_structure,null);
        cy.ValidateElement(this.testData.exam_fee_structure_heading,'Fee Structure');
        cy.ValidateElement(this.testData.exam_sample_mock,null);
        cy.ValidateElement(this.testData.exam_sample_mock_heading,'Sample/Mock Papers'); 
   })
 
    it('Exam News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_news)
            }
        })
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_sidebar_prepguide_heading,null)
        cy.ValidateElement(this.testData.exam_news_heading_1,'Joint Entrance Examination Advanced News')
        cy.ValidateElement(this.testData.exam_comment_news_section,null)
        cy.ValidateElement(this.testData.exam_comment_news_section_heading,'Comments') 
    })

    it('Exam Pattern Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_pattern)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_pattern)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    })

    it('Exam PracPapers Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_pracpaper)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_pracpaper)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal('pracpapers')
        cy.newsCommentExamPage()
        cy.ValidateElement(this.testData.exam_paperspdf_list,null)
        cy.ValidateElement(this.testData.exam_paperspdf_list_heading,'Practice Papers')
        cy.ValidateElement(this.testData.exam_downloadpaper_btn_3,'Question paper') 
    })

    it('Exam Registration Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_registration)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_registration)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    })

    it('Exam Result Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_result)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_result)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons();
        cy.newsCommentExamPage()
    })

    it('Exam Syllabus Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_syllabus)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_syllabus)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.flexButtons()
        }
        cy.newsCommentExamPage()
    })

    it('Exam Preparation Tips Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_preptips)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_preptips)
            }
        })
        cy.commonPageElementVal()
        cy.flexButtons()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    })

    it('Exam College Predictor Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_collegepredictor)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_collegepredictor)
            }
        })
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_predictor_content,null)
        cy.ValidateElement(this.testData.exam_colpredictor,null)
        // if(Cypress.env("varEnv")=='prod'){
        //     cy.ValidateElement(this.testData.exam_colpredictor_heading,'College Predictor for JEE Main 2022')
        // }
        cy.ValidateElement(this.testData.exam_predictor_notification,null)
        cy.ValidateElement(this.testData.exam_noti_heading,'Notifications')
        cy.ValidateElement(this.testData.exam_predictor_youcancheck,null)
        cy.ValidateElement(this.testData.exam_predictor_youcancheck_heading,'You can also check')
        cy.ValidateElement(this.testData.exam_predictor_coursepages,null)
        cy.ValidateElement(this.testData.exam_predictor_coursepages_heading,'Category Pages')
        cy.ValidateElement(this.testData.exam_predictor_college,null)
        cy.ValidateElement(this.testData.exam_predictor_college_AN_btn,'APPLY NOW')
    })

    it('Exam Rank Predictor Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_rankpredictor)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_rankpredictor)
            }
        })
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_predictor_content,null)
        cy.ValidateElement(this.testData.exam_colpredictor,null)
        // if(Cypress.env("varEnv")=='prod'){
        //     cy.ValidateElement(this.testData.exam_colpredictor_heading,'College Predictor for JEE Main 2022')
        // }
        cy.ValidateElement(this.testData.exam_predictor_notification,null)
        cy.ValidateElement(this.testData.exam_noti_heading,'Notifications')
        cy.ValidateElement(this.testData.exam_predictor_youcancheck,null)
        cy.ValidateElement(this.testData.exam_predictor_youcancheck_heading,'You can also check')
        cy.ValidateElement(this.testData.exam_predictor_coursepages,null)
        cy.ValidateElement(this.testData.exam_predictor_coursepages_heading,'Category Pages')
        cy.ValidateElement(this.testData.exam_predictor_college,null)
        cy.ValidateElement(this.testData.exam_predictor_college_AN_btn,'APPLY NOW')
    })

    it('Exam Eligibility Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_eligibility)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_eligibility)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage()
    })

    it('Exam Reservation Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_reservation)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_reservation)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    })

    it('Exam Centres Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_centres)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_centres)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage()
    })

    it('Exam Cards Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_card)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_card)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage()
    })

    it('Exam Paper Analysis Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_paperanalysis)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_paperanalysis)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage()
    })

    it('Exam OMR KEY Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_OMRkey)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_OMRkey)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage()
    })

    it('Exam CSAB-NEUT Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_csab_neut)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_csab_neut)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage('mains')
    })

    it('Exam Latest News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_latestnews)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_latestnews)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage('mains')
    })

    it('Exam seatallotment Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_seatallotment)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_seatallotment)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage('mains')
    })

    it('Exam Counselling Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_counselling)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_counselling)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage('mains')
    })

    it('Exam cutoff_NITs Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_cutoff_nits)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_cutoff_nits)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.flexButtons()
        }
        cy.newsCommentExamPage('mains')
    })

    it('Exam Rank vs Marks Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_rankVSmarks)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_rankVSmarks)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage('mains')
    })

    it('Exam Question Papers Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_quesPaper)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_quesPaper)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.newsCommentExamPage('mains')
        cy.ValidateElement(this.testData.exam_paperspdf_list,null)
        cy.ValidateElement(this.testData.exam_paperspdf_list_heading,'Practice Papers')
        cy.ValidateElement(this.testData.exam_downloadpaper_btn_1,'Question paper') 
    })

    it('Exam Test Series Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_testSeries)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_testSeries)
            }
        })
        cy.commonPageElementVal()
        cy.commonExamPageElementVal()
        cy.flexButtons()
        cy.newsCommentExamPage('mains')
    })
})