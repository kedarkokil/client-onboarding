import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { dynamicText } from '../onboardingtao.enum';

@Component({
  selector: 'app-onboardingtao',
  templateUrl: './onboardingtao.component.html',
  styleUrls: ['./onboardingtao.component.scss']
})
export class OnboardingtaoComponent implements OnInit {

  firstFormGroup: FormGroup = this.fb.group({
    fullName: [''],
    displayName: ['']
  });
  secondFormGroup: FormGroup = this.fb.group({
    workspaceName: [''],
    workspaceUrl: ['']
  });

  brandTxt: string = dynamicText.brandTxt;
  brandImg: string = dynamicText.brandImg;
  isHorizontal= true;
  required: string = dynamicText.required;
  congratsImg: string = dynamicText.congratsImg;
  welcomeHeaderTxt: string = dynamicText.welcomeHeaderTxt;
  welcomeText: string = dynamicText.welcomeText;
  fullName: string = dynamicText.fullName;
  displayName: string = dynamicText.displayName;
  createBtn: string = dynamicText.createBtn;
  setupHeaderTxt: string = dynamicText.setupHeaderTxt;
  setupMsgTxt: string = dynamicText.setupMsgTxt;
  workspaceName: string = dynamicText.workspaceName;
  workspaceUrl: string = dynamicText.workspaceUrl;
  optional: string = dynamicText.optional;
  setupTitle: string = dynamicText.setupTitle;
  planText: string = dynamicText.planText;
  congratsTitle: string = dynamicText.congratsTitle;
  launchMsg: string = dynamicText.launchMsg;
  launchBtn: string = dynamicText.launchBtn;
  
  workSpace = [
    { 
      image: '../../assets/userIcon.JPG', 
      header: 'For myself', 
      text: 'Write better. Think more clearly. Stay organized' 
    },
    { 
    image: '../../assets/teamIcon.JPG', 
    header: 'With my team', 
    text: 'Wikis, docs, tasks & projects, all in one place' 
    }
]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.firstFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      displayName: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      workspaceName: ['', Validators.required],
      workspaceUrl: ['']
    });

  }

  get userData() { return this.firstFormGroup.controls; }
  get setupData() { return this.secondFormGroup.controls; }

  userInfo() {
    if (this.firstFormGroup.invalid) {
      return;
    }
  }
  setupInfo() {
    if (this.secondFormGroup.invalid) {
      return;
    }

  }

}
