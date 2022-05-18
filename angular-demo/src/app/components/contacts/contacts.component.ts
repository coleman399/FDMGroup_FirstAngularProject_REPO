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

  constructor(private contactService: ContactService) {
    this.contactService.getContacts().then((contacts: Contact[]) => { console.log("Contacts Received: ", JSON.stringify(contacts)), this.contacts = contacts; }, (error: Error) => { console.log("Error: ", error) });

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
}
