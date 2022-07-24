import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-employee',
  templateUrl: './config-employee.component.html',
  styleUrls: ['./config-employee.component.scss']
})
export class ConfigEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  EmployeeList: EmpElement[] = [
    {name:'A AA', email:'A@cpf.cp.th', duties:[{role:'Approver',location:'โรงงาน A'},{role:'Approver',location:'โรงงาน B'}]},
    {name:'B BB', email:'B@cpf.cp.th', duties:[{role:'BU',location:'โรงงาน A'},{role:'BU',location:'โรงงาน B'}]}
  ]

}

export interface EmpElement {
  name: string;
  email: string;
  duties: {role:string,location:string}[];
}
