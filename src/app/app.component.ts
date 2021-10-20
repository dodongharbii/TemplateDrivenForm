import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  @ViewChild('info') formInfo !: NgForm;
  defaultPick = "pet";
  secretAnswer = "";
  jobDescription = "";
  submitted = false;
  num = 0;
  uName = "";
  genders = ['Male', 'Female', 'LGBTQ+', 'Prefer not to say'];
  suggestedUsernames = ['TurboSlayer', 'CrypticHatter', 'CrashTv', 'IronMerc', 'UltimateBeast',
'sparkly', 'blossom', 'spuffyffet', 'blikimore', 'rozalthiric', 'reakefit', 'popularkiya', 'onemama', 'brighthulk',
'edgymerch', 'flamesbria'];
  userInfo ={
    UserName: '',
    PassWord: '',
    Email: '',
    PhoneNumber: 0,
    SecretQuestion: '',
    SecretAnswer: '',
    Gender: '',
    Job: '',
    JobDescription: '',
    Salary: 0,
  }

  suggestUsername()
  {
    this.num = Math.floor((Math.random() * 15));
    const uName = this.suggestedUsernames[this.num];

    this.formInfo.form.patchValue
    (
      {
        personalData:
        {
          username: uName
        }
      }
    )
  }

  onSubmit()
  {
    this.submitted = true;
    this.userInfo.UserName = this.formInfo.value.personalData.username;
    this.userInfo.PassWord = this.formInfo.value.personalData.password;
    this.userInfo.Email = this.formInfo.value.personalData.email;
    this.userInfo.PhoneNumber = this.formInfo.value.personalData.number;
    this.userInfo.SecretQuestion = this.formInfo.value.accountData.secretQuestion;
    this.userInfo.SecretAnswer = this.formInfo.value.accountData.secretAnswer;
    this.userInfo.Gender = this.formInfo.value.accountData.gender;
    this.userInfo.Job = this.formInfo.value.accountData.job;
    this.userInfo.JobDescription = this.formInfo.value.accountData.jobDescription;
    this.userInfo.Salary = this.formInfo.value.accountData.salary;

    this.formInfo.reset();
    this.defaultPick = "pet";
  }
}
