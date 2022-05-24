describe('Verify Elements and page structure- Mob Exam Group 2', () => {
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

    it('Mob Exam Books Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_books)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_books)
            }
        })  
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal();
        cy.commonMobScrollElementVal();    
    }) 

    it('Mob Exam Cutoff Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_cutoff)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_cutoff)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('prod');
        cy.commonMobScrollElementVal();
    }) 

    it('Mob Exam Dates Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_dates)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_dates)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection_withoutfaqs');
        cy.commonMobScrollElementVal();
    }); 

    it('Mob Exam Engineering Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_engineer)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_engineer)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_list_container_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_container_1_heading,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
    }) 

    it('Mob Exam Overview Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_overview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_overview)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.commonMobExamPageElementVal('table2');
        }else{
            cy.commonMobExamPageElementVal('prod4_withoutfaqs_withoutfaqsection');
        }
        cy.commonMobScrollElementVal();
        cy.mobFlexButtons();
    })

    it('Mob Exam News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_news)
            }
        })
        cy.commonMobPageElementVal()
        cy.ValidateElement(this.testData.mob_exam_new_headin_1,'Joint Entrance Examination Advanced News')
        cy.ValidateElement(this.testData.mob_exam_news_container_1,null)
        cy.ValidateElement(this.testData.exam_comment_news_section_heading,'Comments') 
        cy.ValidateElement(this.testData.mob_exam_news_shortlist_btn,null)
    })

    it('Mob Exam Pattern Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_pattern)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_pattern)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
    })

    it('Mob Exam PracPapers Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_pracpaper)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_pracpaper)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobScrollElementVal();
        cy.ValidateElement(this.testData.exam_content_headsilo_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        cy.ValidateElement(this.testData.exam_news_section_2,null);
        cy.ValidateElement(this.testData.exam_comments_section_3,null);
        cy.ValidateElement(this.testData.exam_comments_section_3_heading,'Comments');
        cy.ValidateElement(this.testData.mob_exam_pracpaper,null); 
        cy.ValidateElement(this.testData.mob_exam_pracpaper_heading_1,'Practice Papers');
        cy.ValidateElement(this.testData.mob_exam_pracpaper_btn_3,'Question Paper');
    })

    it('Mob Exam Registration Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_registration)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_registration)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
    })

    it('Mob Exam Result Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_result)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_result)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('prod3');
        cy.commonMobScrollElementVal();
    })

    it('Mob Exam Syllabus Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_syllabus)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_syllabus)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam Preparation Tips Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_preptips)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_preptips)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam College Predictor Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_collegepredictor)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_collegepredictor)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_predictor_card_1,null);
        if(Cypress.env("varEnv")=='prod'){
            cy.ValidateElement(this.testData.mob_predictor_card_heading_1,'College Predictor for JEE Main 2022');
        }
        cy.ValidateElement(this.testData.mob_predictor_card_btn_1,'Check results');
        cy.ValidateElement(this.testData.mob_predictor_col_1,null);
        cy.ValidateElement(this.testData.mob_predictor_col_btn_1,'APPLY NOW');
    })

    it('Mob Exam Rank Predictor Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_rankpredictor)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_rankpredictor)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_predictor_card_1,null);
        if(Cypress.env("varEnv")=='prod'){
            cy.ValidateElement(this.testData.mob_predictor_card_heading_1,'College Predictor for JEE Main 2022');
        }
        cy.ValidateElement(this.testData.mob_predictor_card_btn_1,'Check results');
        cy.ValidateElement(this.testData.mob_predictor_col_1,null);
        cy.ValidateElement(this.testData.mob_predictor_col_btn_1,'APPLY NOW');
    })

    it('Mob Exam Eligibility Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_eligibility)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_eligibility)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='prod'){
            cy.commonMobExamPageElementVal('withoutfaqsection_prod2');
        }
        cy.commonMobScrollElementVal();
        cy.mobFlexButtons();
    })

    it('Mob Exam Reservation Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_reservation)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_reservation)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam Centres Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_centres)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_centres)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
    })

    it('Mob Exam Cards Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_card)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_card)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam Paper Analysis Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_paperanalysis)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_paperanalysis)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.commonMobExamPageElementVal('table3_withoutfaqsection_withoutfaqs');
        }else{
            cy.commonMobExamPageElementVal('withoutfaqsection_withoutfaqs');
        }
        cy.commonMobScrollElementVal();
        cy.mobFlexButtons();
    })

    it('Mob Exam OMR KEY Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_OMRkey)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_OMRkey)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection_withoutfaqs');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam CSAB-NEUT Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_csab_neut)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_csab_neut)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam Latest News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_latestnews)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_latestnews)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam seatallotment Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_seatallotment)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_seatallotment)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
    })

    it('Mob Exam Counselling Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_counselling)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_counselling)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='prod'){
            cy.commonMobExamPageElementVal('prod3_withoutfaqsection');
        }
        cy.commonMobScrollElementVal();
    })

    it('Mob Exam cutoff_NITs Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_cutoff_nits)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_cutoff_nits)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection_withoutfaqs');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam Rank vs Marks Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_rankVSmarks)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_rankVSmarks)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
    })

    it('Mob Exam Question Papers Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_quesPaper)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_quesPaper)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutcontent_notable_withoutfaqsection_withoutfaqs');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.mob_exam_questionPaper_scetion_1,' Morning  Check Here   Check Here   Check Here  ')
        }
        cy.ValidateElement(this.testData.mob_exam_pracpaper,null);
        cy.ValidateElement(this.testData.mob_exam_pracpaper_heading_1,'Practice Papers');
        cy.ValidateElement(this.testData.mob_exam_pracpaper_btn_1,'Question Paper');
    })

    it('Mob Exam Test Series Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_testSeries)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_testSeries)
            }
        })
        cy.commonMobPageElementVal();
        cy.commonMobExamPageElementVal('withoutcontent_withoutfaqsection');
        cy.commonMobScrollElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
        cy.ValidateElement(this.testData.mob_exam_pracpaper,null);
        cy.ValidateElement(this.testData.mob_exam_pracpaper_heading_1,'Practice Papers');
        cy.ValidateElement(this.testData.mob_exam_pracpaper_btn_1,'Question Paper');
    })
})