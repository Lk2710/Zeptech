import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
@Input() data=0 as any;
@Input() activateEdit = false;
@Output() sendEditEvent = new EventEmitter<any>();
  constructor() { }

  onClickEdit(){
    this.sendEditEvent.emit(true);
  }
  ngOnInit(): void {
  }

}
