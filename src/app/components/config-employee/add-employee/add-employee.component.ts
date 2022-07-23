import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  isAdmin: boolean = false;
  isOther: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isOther = false;
  }

}
