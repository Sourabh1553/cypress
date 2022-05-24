describe('Verify Elements and page structure- Collegedunia Pages', () => {
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

    it('CollegeDunia Home Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_home)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_home)
            }
        })
        cy.commonPageElementVal('HomePage')
        cy.ValidateElement(this.testData.home_page_searchbar,null)
        cy.ValidateElement(this.testData.section_1,null)
        cy.ValidateElement(this.testData.heading_1,'Select Your Study Goal')
        cy.ValidateElement(this.testData.section_2,null)
        cy.ValidateElement(this.testData.heading_2,'Top Study Places')
        cy.ValidateElement(this.testData.section_3,null)
        cy.ValidateElement(this.testData.heading_3,'Top Collections')
        cy.ValidateElement(this.testData.section_4,null)
        cy.ValidateElement(this.testData.heading_4,'Top Universities/Colleges')
        cy.ValidateElement(this.testData.section_5,null)
        cy.ValidateElement(this.testData.section_7,null)
        cy.ValidateElement(this.testData.heading_7,'Study Abroad')
    }) 

    it('CollegeDunia India Universities Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.indiaUniveristy)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.indiaUniveristy)
            }
        })
        cy.commonPageElementVal()
        cy.commonCollegeListPageElements()
    }) 

    it('CollegeDunia India College Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.indiaCollege)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.indiaCollege)
            }
        })
        cy.commonPageElementVal()
        cy.commonCollegeListPageElements()
    }) 

    it('CollegeDunia Courses Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_course)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_course)
            }
        })
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_searchbar,null)
        cy.ValidateElement(this.testData.stream_section,null)
        cy.ValidateElement(this.testData.interest_section,null)
        cy.ValidateElement(this.testData.interest_section_heading,'CHOOSE BY INTEREST')
        cy.ValidateElement(this.testData.search_course,null).end()
    }) 

    it('CollegeDunia Exams Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_exam)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_exam)
            }
        })
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_heading_1,'Entrance Exams In India')
        cy.ValidateElement(this.testData.examlist_section,null)
        cy.ValidateElement(this.testData.examlist_section_heading,'Explore by Category')
        cy.ValidateElement(this.testData.exam_course,null)
    }) 

    it('CollegeDunia Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_review)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_review)
            }
        })
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_searchbar,null)
        cy.ValidateElement(this.testData.review_section,null)
        if(Cypress.env("varEnv")=='prod'){
            cy.ValidateElement(this.testData.top_review_sidebar,null)       
            cy.ValidateElement(this.testData.top_review_sidebar_heading,'TOP REVIEWS')
        }
        
        cy.ValidateElement(this.testData.review_listing,null)
        cy.ValidateElement(this.testData.single_review,null)
        cy.ValidateElement(this.testData.review_user,null)
        cy.ValidateElement(this.testData.review_content,null)
        cy.ValidateElement(this.testData.review_btns,null)
    }) 

    it('CollegeDunia Exam News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_news)
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

    it('CollegeDunia Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_admission)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.admission_heading_1,'Get admission in best colleges');
        cy.ValidateElement(this.testData.admission_search_btn,'Search');
        cy.ValidateElement(this.testData.other_col1,'Apply Now');
    })

    it('CollegeDunia Write review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.othe_writeReview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.othe_writeReview)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.review_search_col,null);
        cy.ValidateElement(this.testData.review_section_1,null);
        cy.ValidateElement(this.testData.review_section_1_heading,'   How to win Awesome Rewards for Reviews  ');
        cy.ValidateElement(this.testData.review_section_2,null);
        cy.ValidateElement(this.testData.review_section_2_heading,'  Rules and Guidelines ');
        cy.ValidateElement(this.testData.review_section_3,null);
        cy.ValidateElement(this.testData.review_section_3_heading,'   This Week Featured Review  ');
    })

    it('CollegeDunia About Page', function () {
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
        cy.ValidateElement(this.testData.about_us_stats,null);
        cy.ValidateElement(this.testData.about_us_ads,null);
        cy.ValidateElement(this.testData.about_us_ads_btn,'Mail us');
    })

    it('CollegeDunia Contact Us Page', function () {
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

    it('CollegeDunia Ad Page', function () {
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

    it('CollegeDunia Career Page', function () {
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
        cy.ValidateElement(this.testData.career_opening,null);
        cy.ValidateElement(this.testData.career_opening_heading,'Current Openings');
    })

    it('CollegeDunia website-usage-policy Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_policy)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_policy)
            }
        })
        cy.ValidateElement(this.testData.ad_section,null);
        cy.ValidateElement(this.testData.heading_policy,'Website Usage Policy');
    })

    it('CollegeDunia SA Home Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_SApage)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_SApage)
            }
        })
        cy.commonPageElementVal('SA'); 
        cy.ValidateElement(this.testData.SA_headings,'Collegedunia Free Counselling: Let Us Guide You');
        cy.ValidateElement(this.testData.SA_headings,'Meet Our Counsellors');
        cy.ValidateElement(this.testData.SA_headings,'Choose Your Study Destination');
        cy.ValidateElement(this.testData.SA_headings,'Choose Your Future');
    })

    it('CollegeDunia Admission Offers Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_admissionoffers)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_admissionoffers)
            }
        })
        cy.get('body').find('img').should('have.attr', 'src').should('include','/public/asset/img/cd_logo.png')
        cy.ValidateElement(this.testData.form_section,null);
        cy.ValidateElement(this.testData.form_section_heading,'Recent Winners');
    })

    it('CollegeDunia Loan Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_loan)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_loan)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.loan_heading,'EducationLoans in India and Abroad');
        cy.ValidateElement(this.testData.loan_bankbar,'all banksgovt banksprivate bankscooperativeNBFCs');
        cy.ValidateElement(this.testData.loan_banklist,null);
        cy.ValidateElement(this.testData.loan_btns,'CompareApply Now');
        cy.ValidateElement(this.testData.loan_emi_section,null);
        cy.ValidateElement(this.testData.loan_emi_section_heading,'CALCULATE YOUR EDUCATION LOAN EMI');
    })

    it('CollegeDunia Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_scholarship)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.scholarships_list,null);
        cy.ValidateElement(this.testData.scholarships_ap_btn,' Apply Now ');
        cy.ValidateElement(this.testData.scholarships_sidebar,null);
        cy.ValidateElement(this.testData.scholarships_sidebar_heading,'Most Popular Links');
    })

    it('CollegeDunia Canada Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.canada_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.canada_scholarship)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.scholarships_list,null);
        cy.ValidateElement(this.testData.scholarships_ap_btn,' Apply Now ');
        cy.ValidateElement(this.testData.scholarships_sidebar,null);
        cy.ValidateElement(this.testData.scholarships_sidebar_heading,'Most Popular Links');
    })

    it('CollegeDunia Specific Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.spec_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.spec_scholarship)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.applynow_btn,' Apply Now ');
    })
    
    it('CollegeDunia THEPRINT Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_theprint)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_theprint)
            }
        })
        cy.commonPageElementVal();
        cy.get('body').find('img').should('have.attr', 'src').should('include','/public/asset/img/cd_logo.png')
        cy.ValidateElement(this.testData.theprint_sections,null);
        cy.ValidateElement(this.testData.theprint_notification_section,null);
        cy.ValidateElement(this.testData.theprint_partner_websites,null);
    })
}) 