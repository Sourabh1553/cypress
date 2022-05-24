const axios = require('axios');
const fs = require('fs');
const path = require('path');
// const jsonData = require('../cypress/report/CDResult.json');
/**
 * sends mail using falconide on mailapi
 * options {
 *  from,
 *  fromName,
 *  tags,
 *  test, set to true for test mail
 * }
 * @param {string} content
 */
 async function sendMail() {
    const content=  process.env.CI_JOB_ID;
    let commitmessage;
    if(process.env.commit_message== ''){
      commitmessage=  process.env.commit_message;
    }else{
      commitmessage=  process.env.CI_COMMIT_MESSAGE; 
    }
    let tags = [];
    let tags_testers = [];
    let tags_testers_name = [];
    if(process.env.branch_name== null){
      tags_testers_name = commitmessage.split("Tester-");
      tags_testers = tags_testers_name[1].split("Server-");
      tags = tags_testers[1].split("QAPipelineTags-");      
      process.env.branch_name =  tags[0];
    }else{
      tags = process.env.commit_message.split("QAPipelineTags-");
    }
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'mail-setting':'6',
        'x-api-key':'mlfy_4x0PgBDp0thVigX',
        'x-api-secret':'123456',
        'Expect':''
    }
    let jsonPath = path.join(__dirname, '..','..', 'cypress', 'report', 'CDResult.json');
    let jsonString = fs.readFileSync(jsonPath, 'utf8');
    const date= process.env.datetime;
    const obj = JSON.parse(jsonString);
    const testcount= obj.stats.tests;
    const passcount= obj.stats.passes;
    const failurecount= obj.stats.failures;
    const skipcount= obj.stats.skipped;
    let errdesc=[];
    for (let i = 0; i < obj.results.length; i++){
      let objres = obj.results[i];
      if(errdesc.length<=10){
        for (let i = 0; i < objres.suites.length; i++){
          let objsuites = objres.suites[i];
          if(errdesc.length<=10){
            for (let i = 0; i < objsuites.tests.length; i++){
              let objtests = objsuites.tests[i];
              let error = objtests.err.message;
              // console.log(error)
              if(error!=null && errdesc.length<=10){
                errdesc.push('Error code: '+objtests.err.message+'<br>')
              }
            }
          }
        }
      }
    }
    let subjectText;
    if(process.env.varEnv=='prod'){
      subjectText='Testing Automation Report- ENV: '+process.env.varEnv+'; BRANCH: '+process.env.branch_name+'; TAGS: '+tags[1]
    }else{
      subjectText='Testing Automation Report- '+'Tester-'+ tags_testers[0] +'ENV: '+process.env.varEnv+'; BRANCH: '+process.env.branch_name+'; TAGS: '+tags[1]
    }
    const mailData = [
      {
        recipients : [['gitlab-integration-re-aaaae2hset2lk2tojlajzrsnk4@collegeduniaworkspace.slack.com']],
        content : 'BRANCH: '+process.env.branch_name+'<br>'+
        'TAGS: '+ tags[1]+'<br>'+
        'ENV: '+ process.env.varEnv+'<br>'+
        'Zip folder link for the report- <a href="https://staticstage.collegedunia.com/gitlab-report/report_'+ date + '.zip">link</a>'+ '<br>'+
        'HTML Report link- <a href="https://staticstage.collegedunia.com/gitlab-report/report_'+ date + '/CDResult.html">link</a>'+ '<br><br>'+
        'Total cases: '+testcount+'<br>'+
        'Passed cases: '+passcount+'<br>'+
        'Failed cases: '+failurecount+'<br>'+
        'Skipped cases: '+skipcount+'<br>'+
        'Error description:'+'<br>'+errdesc,
        subject: subjectText,
        from: 'GitLab-ci-reporting',
        mail_tags:'cypress_report',
        plain_text:'Cypress Automation Report',
        fromname: 'Gitlab-CI',
        tags: 'collegedunia',
      },
    ]
    console.log(mailData)
    // mailify data format
    let data = {
      mail_data: JSON.stringify(mailData),
      ecategory: 'transactional',
      test: true,
    }
    data = new URLSearchParams(data).toString()
    // calling api
    try{
        const response = await axios({
            method: 'post',
            url: 'https://stage1.smtpmailify.com/api/sendMail',
            headers,
            data,
          })
    }catch(error ){
       console.log(error)
    }
  }
  sendMail()