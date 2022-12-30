import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  arr=[1,2,3,4,5,6];

  fruits=["apple","banana","orange","grapes"]

  add(myfruit:any){
    this.fruits.push(myfruit)
  }

}
