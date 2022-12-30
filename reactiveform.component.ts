import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

    student:any;
    ngOnInit(): void {
      this.student=new FormGroup({
        firstname:new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]*$')
        ])),
        lastname:new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3)
        ])),
        age:new FormControl("",Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(100)
        ])),
        id:new FormControl("",Validators.compose([
          Validators.required,
          Validators.min(1000),
          Validators.max(10000000)
        ])),
        salary:new FormControl("",Validators.compose([
          Validators.required,
          Validators.min(1000000),
          Validators.max(1000000000)
        ])),
        desig:new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]*$')
        ])),
      })
    }
  }


