import { Component} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent{

 selected = '';

 selectChangeHandler (event: any) {
  //update the ui
  this.selected = event.target.value;
}
  constructor() { }

  ngOnInit() {
  }

}