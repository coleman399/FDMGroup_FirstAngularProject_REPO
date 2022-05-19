import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  favoriteContacts: Contact[] = [];
  selectedContactId!: number;
  contactToCreate: Contact = { id: 10, firstName: 'bob', middleName: 'N/A', lastName: 'example', email: 'bob@example.com', phoneNumber: '+1 123 - 1234' };

  constructor(private contactService: ContactService) {
    this.getContacts();
    console.log("Current Contacts: " + JSON.stringify(this.contacts));
  }

  ngOnInit(): void {
  }

  selectContact(contactId: number): void {
    this.selectedContactId = contactId;
  }

  addToFavorites(contact: Contact) {
    this.favoriteContacts.push(contact);
  }

  getContacts() {
    this.contactService.getContacts().then(
      (contacts: Contact[]) => { console.log("Contacts Received: ", JSON.stringify(contacts)), this.contacts = contacts; },
      (error: Error) => { console.log("Error: ", error) }
    );
  }

  createContact(contact: Contact) {
    this.contactService.createContact(contact).then(
      (contact: Contact) => { console.log("Contact was created: " + contact) },
      (error: Error) => { console.log("Error: ", error) }
    );
    this.getContacts();
  }
}
