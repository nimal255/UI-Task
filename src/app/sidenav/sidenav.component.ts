import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  // createForm(){
  //   alert('')
  // }
  // data:any;
//   dreamList:any=[
//     {
//       heading:"Dream Program",
//       body:"A new promotion has been released today! For more details, go..",
//       month:"FEB",
//       day:"22"
//     },  
//     {
//       heading:"NEC Aspire System",
//       body:"Auction on NEC ASPIRE SYSTEM  is ending soon",
//       month:"FEB",
//       day:"24"
//     },
//     {
//       heading:"Dream Program",
//       body:"A new promotion has been released today! For more details, go..",
//       month:"FEB",
//       day:"25"
//     },
// ]

// slider:any;
// QuotesComponent

constructor(public Router:Router){

}

ngOnInit(): void {
  
}

// quotes(){
//   let value:any = document.querySelector("#value");
//   let input:any = document.querySelector("#pi_input");
//   value.textContent = input.value;
//   input.addEventListener("input", (event:any) => {
//     value.textContent = event.target.value;
//   });
  
// }



}
