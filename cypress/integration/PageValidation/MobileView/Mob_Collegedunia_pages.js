describe('Verify Elements and page structure- Mob Collegedunia Pages', () => {
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

    it('Mob CollegeDunia Home Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_home)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_home)
            }
        })
        cy.commonMobPageElementVal('HomePage')
        cy.ValidateElement(this.testData.mob_homepage_searchbar_1,null)
        cy.ValidateElement(this.testData.mob_homepage_section_1,null)
        cy.ValidateElement(this.testData.mob_homepage_section_1_heading,'Top Study Places')
        cy.ValidateElement(this.testData.mob_homepage_section_2,null)
        cy.ValidateElement(this.testData.mob_homepage_section_2_heading,'Top Universities/Colleges')
        cy.ValidateElement(this.testData.mob_homepage_section_3,null)
        cy.ValidateElement(this.testData.mob_homepage_section_3_heading,'Explore Courses')
        cy.ValidateElement(this.testData.mob_homepage_section_4,null)
        cy.ValidateElement(this.testData.mob_homepage_section_4_heading,'Top Exams')
        cy.ValidateElement(this.testData.mob_homepage_db_btn_1,null)
    }) 

    it('Mob CollegeDunia India Universities Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.indiaUniveristy)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.indiaUniveristy)
            }
        })
        cy.commonMobPageElementVal('list');
        cy.ValidateElement(this.testData.mob_listing_heading_1,null);
        cy.ValidateElement(this.testData.mob_col_listing_card,null);
        cy.ValidateElement(this.testData.mob_col_listing_rating,null);
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.mob_col_listing_card_btns,null);
        }
    }) 

    it('Mob CollegeDunia India College Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.indiaCollege)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.indiaCollege)
            }
        })
        cy.commonMobPageElementVal('list');
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.mob_listing_heading_1,null);
        }
        cy.ValidateElement(this.testData.mob_col_listing_card,null);
        cy.ValidateElement(this.testData.mob_col_listing_rating,null);
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.mob_col_listing_card_btns,null);
        }
    }) 

    it('Mob CollegeDunia Courses Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_course)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_course)
            }
        })
        cy.commonMobPageElementVal()
        cy.ValidateElement(this.testData.mob_course_list_card_1,null)
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.mob_course_list_card_list_1,'16Iti4Arts2Dental2Vocational Courses1Animation')
        }
        cy.ValidateElement(this.testData.mob_course_list_card_heading_1,'After 10th Courses')
    }) 

    it('Mob CollegeDunia Exams Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_exam)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_exam)
            }
        })
        cy.commonMobPageElementVal()
        cy.ValidateElement(this.testData.mob_examhome_heading,'Entrances Exams India')
        cy.ValidateElement(this.testData.mob_examhome_section_heading,'Explore By CategoryBrowse 100+ entrance exams')
        cy.ValidateElement(this.testData.mob_examhome_card_1,'engineering')
    }) 

    it('Mob CollegeDunia Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_review)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_review)
            }
        })
        cy.commonMobPageElementVal()
        cy.ValidateElement(this.testData.course_searchbar,null)
        cy.ValidateElement(this.testData.mob_review_container_1,null)
        cy.ValidateElement(this.testData.mob_review_1_rating,null)
        cy.ValidateElement(this.testData.mob_review_filter_sort_btn,null)
    }) 

    it('Mob CollegeDunia Exam News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_news)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_news_section_1,null);
        cy.ValidateElement(this.testData.mob_news_topnews_section,null);
        cy.ValidateElement(this.testData.mob_news_topnews_section_heading,'Top News');
        cy.ValidateElement(this.testData.mob_news_morenews_section,null);
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_1,'See All News');
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_2,'ALL NEWSADMISSION ALERTCOLLEGE NEWSEXAM NEWS');
        cy.ValidateElement(this.testData.mob_news_morenews_section_btn,'Read More ');
    })

    it('Mob CollegeDunia Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_admission)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_admission_contentlist_1,null);
        cy.ValidateElement(this.testData.mob_admission_content_1,null);
        cy.ValidateElement(this.testData.mob_admission_content_btn,null);
    })

    it('Mob CollegeDunia Write review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.othe_writeReview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.othe_writeReview)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_searchbar_2,null);
        cy.ValidateElement(this.testData.mob_writereview_content_1,null);
        cy.ValidateElement(this.testData.mob_writereview_content_2,null);
        cy.ValidateElement(this.testData.mob_writereview_content_2_heading,' Rules and Guidelines ');
        cy.ValidateElement(this.testData.mob_writereview_content_2_btn,'SHOW ALL');
        cy.ValidateElement(this.testData.mob_writereview_reviewlist,null);
        cy.ValidateElement(this.testData.mob_writereview_content_3,null);
        cy.ValidateElement(this.testData.mob_writereview_content_3_heading,' Prizes & Rewards ');
    })

    it('Mob CollegeDunia About Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_about)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_about)
            }
        })
        cy.ValidateElement(this.testData.about_us_heading,null);
        cy.ValidateElement(this.testData.mob_aboutus_stats,null);
        cy.ValidateElement(this.testData.mob_aboutus_ad,null);
        cy.ValidateElement(this.testData.mob_aboutus_ad_btn,'Mail us');
    })

    it('Mob CollegeDunia Contact Us Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_contactus)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_contactus)
            }
        })
        cy.ValidateElement(this.testData.contactus_address_section,null);
        cy.ValidateElement(this.testData.contactus_getintouch_section,null);
    })

    it('Mob CollegeDunia Ad Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_ad)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_ad)
            }
        })
        cy.ValidateElement(this.testData.ad_section,null);
    })

    it('Mob CollegeDunia Career Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_career)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_career)
            }
        })
        cy.ValidateElement(this.testData.career_heading,'We are Hiring');
        cy.ValidateElement(this.testData.mob_career_opening,null);
        cy.ValidateElement(this.testData.mob_career_opening_heading,'Current Openings');
    })

    it('Mob CollegeDunia website-usage-policy Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_policy)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_policy)
            }
        })
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
    })

    it('Mob CollegeDunia SA Home Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_SApage)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_SApage)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_sa_searchbar_3,null);
    })

    it('Mob CollegeDunia Admission Offers Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_admissionoffers)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_admissionoffers)
            }
        })
        cy.ValidateElement(this.testData.form_section,null);
        cy.ValidateElement(this.testData.form_section_heading,'Recent Winners');
    })

    it('Mob CollegeDunia Loan Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_loan)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_loan)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.loan_content_heading,'Education  Loans in India and Abroad');
    })

    it('Mob CollegeDunia Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_scholarship)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_listing_heading_2,null);
        cy.ValidateElement(this.testData.mob_scholarship_list_1,null);
        cy.ValidateElement(this.testData.mob_scholarship_list_btns_1,null);
    })

    it('Mob CollegeDunia Canada Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.canada_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.canada_scholarship)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_listing_heading_2,null);
        cy.ValidateElement(this.testData.mob_scholarship_list_1,null);
        cy.ValidateElement(this.testData.mob_scholarship_list_btns_1,null);
    })

    it('Mob CollegeDunia Specific Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.spec_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.spec_scholarship)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_scholarship_list_content_section_1,null);
        cy.ValidateElement(this.testData.mob_scholarship_faq_section_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        cy.ValidateElement(this.testData.mob_scholarship_similarScholarship_section_1,null);
    })

    it('Mob CollegeDunia THEPRINT Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_theprint)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_theprint)
            }
        })
        cy.commonMobPageElementVal();
        cy.get('body').find('img').should('have.attr', 'src').should('include','/public/image/media/theprint-logo.png')
        cy.ValidateElement(this.testData.mob_theprint_scroller,null);
        cy.ValidateElement(this.testData.mob_theprint_partners,null);
    })
})  