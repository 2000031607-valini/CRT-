import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  myname="valini";
  username="";

  abc(fname:any,lname:any){
    alert("Hey you have given your name succesfully : Hi " +fname +" " +lname +";)")
    this.username=lname;
  }

  total=0
  emi=0;
  cal(p:any,t:any,r:any){
  // console.log("Principle:"+p)
  // console.log("TIme : "+t);
  // console.log("ROI  :"+r);

    this.total=(p*t*r)/100;
    this.emi= this.total/t;
  }
  intrest=0
  roi(loan:any) {
   if(loan.target.value=='car')
   {
    this.intrest=9;
   }
   else if(loan.target.value=='home')
   {
    this.intrest=7;
   }
   else if(loan.target.value=='persl')
   {
    this.intrest=13;
   }
   else if(loan.target.value=='edu')
   {
    this.intrest=11;
   }
  }

}
