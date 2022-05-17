import { Component, OnInit } from '@angular/core';
import '../employee-list/employee-list.component.css';


@Component({
  selector: 'app-employee-list',
  templateUrl: '../employee-list/employee-list.component.html',
  styleUrls: ['../employee-list/employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  isSpecial: boolean = false;
  name: string = "Dillon Coleman"
  constructor() { }


  setDarkMode(): void {
    this.isSpecial = !this.isSpecial;
  }

  ngOnInit(): void {
  }

}
