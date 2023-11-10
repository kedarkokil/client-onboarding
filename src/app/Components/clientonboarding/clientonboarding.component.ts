import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { dynamicText } from '../clientonboarding.enum';
import { DataService } from 'src/app/CommonServices/data.service';

@Component({
  selector: 'app-clientonboarding',
  templateUrl: './clientonboarding.component.html',
  styleUrls: ['./clientonboarding.component.scss']
})
export class ClientOnboardingComponent implements OnInit {
  dataList: any ;
  formAFormGroup: FormGroup = this.fb.group({
    fullName: [''],
    displayName: ['']
  });
  formBFormGroup: FormGroup = this.fb.group({
    workspaceName: [''],
    workspaceUrl: ['']
  });

  nameText: string = dynamicText.nameText;
  imgName: string = dynamicText.imgName;
  isHorizontal= true;
  required: string = dynamicText.required;
  congratsImg: string = dynamicText.congratsImg;
  firstPageHeaderTxt: string = dynamicText.firstPageHeaderTxt;
  firstPageText: string = dynamicText.firstPageText;
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
  
constructor(private fb: FormBuilder, private dataService: DataService) { 
  this.dataService.getData().subscribe((result) => {
    this.dataList = result;
    console.log('dataList', this.dataList);
  });
}

  ngOnInit(): void {

    this.formAFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      displayName: ['', Validators.required]
    });
    this.formBFormGroup = this.fb.group({
      workspaceName: ['', Validators.required],
      workspaceUrl: ['']
    });

  }

  get userData() { return this.formAFormGroup.controls; }
  get setupData() { return this.formBFormGroup.controls; }

  userInfo() {
    if (this.formAFormGroup.invalid) {
      return;
    }
  }
  setupInfo() {
    if (this.formBFormGroup.invalid) {
      return;
    }

  }

}
