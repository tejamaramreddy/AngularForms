import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }
  reactiveForm:FormGroup = new FormGroup({

  });
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      Name: new FormControl(),
      email: new FormControl(),
      Address: new FormGroup({
        state: new FormControl(),
        city: new FormControl()
      })
    });
  }


  onsubmit(obj:any){
   console.log(obj.value); 
  }
}
