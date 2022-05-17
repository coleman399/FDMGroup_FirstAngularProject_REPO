import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <div>
      <br>
      {{name}}
    </div>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  name: string = "Dillon Coleman"
  constructor() { }

  ngOnInit(): void {
  }

}
