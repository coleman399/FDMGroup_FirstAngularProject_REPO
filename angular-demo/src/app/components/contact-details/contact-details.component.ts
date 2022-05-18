import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input()
  contact!: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
