import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jsonObj = {
    "fullName": "Rack Jackon",
    "gender": "Male",
    "age": 24,
    "address": "streetAddress: 126, city: San Jone, state: CA, postalCode: 394221",
    "phoneNumber": 7383627627,
    "email": "rackjackon@yahoo.com"
  }
  public activateTask1 = true;
  public activateTask2 = false;

  firstTask(){
    this.activateTask1 = true;
    this.activateTask2 = false;
  }
  secondTask(){
    this.activateTask1 = false;
    this.activateTask2 = true;
  }
}
