import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  selectedContact!: Contact;
  favoriteContacts: Contact[] = [];

  constructor() {
    this.contacts = [

      { contactId: 1, firstName: 'Andre', middleName: 'M', lastName: 'Kolber', email: 'andre.kolber@email.com', phoneNumber: '+1 (111) 123 - 1234' },

      { contactId: 2, firstName: 'Dillon', middleName: 'N/A', lastName: 'Coleman', email: 'dillon.coleman@email.com', phoneNumber: '+1 (111) 423 - 1294' },

      { contactId: 3, firstName: 'Jeff', middleName: 'N/A', lastName: 'Thomassen', email: 'jeff.thomassen@email.com', phoneNumber: '+1 (355) 776 - 2475' },

      { contactId: 4, firstName: 'Liam', middleName: 'N/A', lastName: 'Harrington', email: 'liam.harrington@email.com', phoneNumber: '+1 (111) 423 - 1294' },

      { contactId: 5, firstName: 'Patrick', middleName: 'N/A', lastName: 'Hedquist', email: 'patrick.hedquist@email.com', phoneNumber: '+1 (111) 423 - 1294' },

      { contactId: 6, firstName: 'Linette', middleName: 'N', lastName: 'Mora', email: 'linette.mora@email.com', phoneNumber: '+1 (111) 423 - 1294' }

    ]
  }

  ngOnInit(): void {
  }

  selectContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  addToFavorites(contact: Contact): void {
    this.favoriteContacts.push(contact);
  }
}
