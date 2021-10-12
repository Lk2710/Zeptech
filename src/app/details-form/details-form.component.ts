import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  public accountOverviewAccess=true;
  public connectionForm: FormGroup = 0 as any;
  @Input() dataObj=0 as any;
  public submitted=false;
  ngOnInit(){
    this.connectionForm = this.fb.group({
      'fullName':[this.dataObj?this.dataObj.fullName:'',[Validators.required]],
      'age':[this.dataObj?this.dataObj.age:'',[Validators.required,Validators.pattern('[0-9]+')]],
      'gender':[this.dataObj?this.dataObj.gender:'',[Validators.required]],
      'address':[this.dataObj?this.dataObj.address:'',[Validators.required]],
      'email':[this.dataObj?this.dataObj.email:'',[Validators.required,Validators.email]], 
      'phoneNumber':[this.dataObj?this.dataObj.phoneNumber:'',[Validators.required,Validators.pattern('[0-9]+')]],
    });
  }
  get value() { 
    return this.connectionForm.controls; 
  }
  onClickSave(){
    this.submitted = true;
    if (this.connectionForm.invalid) {
      return;
    }
    this.dataObj = this.connectionForm.value;
  }
  onClickCancel(){
    this.connectionForm = this.fb.group({
      'fullName':['',[Validators.required]],
      'age':['',[Validators.required,Validators.pattern('[0-9]+')]],
      'gender':['',[Validators.required]],
      'address':['',[Validators.required]],
      'email':['',[Validators.required,Validators.email]], 
      'phoneNumber':['',[Validators.required,Validators.pattern('[0-9]+')]],
    });
  }
}
