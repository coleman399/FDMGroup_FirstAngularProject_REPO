import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <div>
      <br>
      <img [src]="fdmLogoSrc" style="max-width: 100px; max-height: 100px;" (mouseover)="changeImage()" (mouseleave)="resetImage()">
    </div>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  fdmLogoSrc: string = '../assets/images/Fdm-logo-white.jpg';

  constructor() {

  }

  ngOnInit(): void {
  }

  resetImage(): void {
    this.fdmLogoSrc = '../assets/images/Fdm-logo-white.jpg';
  }

  changeImage(): void {
    this.fdmLogoSrc = '../assets/images/Fdm-logo-black.png';
  }

}
