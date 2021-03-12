import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empregistration',
  templateUrl: './empregistration.component.html',
  styleUrls: ['./empregistration.component.css']
})
export class EmpregistrationComponent  {
  getEmpObj(ref){
    let empObj=ref.value;
  }
}
