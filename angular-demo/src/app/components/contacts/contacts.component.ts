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

  contacts: Contact[];
  selectedContact!: Contact;
  favoriteContacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contacts = contactService.getContacts();
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
