import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnChanges {

  @Input()
  contactId!: number;
  contact!: Contact;

  @Output()
  favRequest = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {
  }

  ngOnChanges(): void {
    this.contactService.getContact(this.contactId).then(
      (contact) => { this.contact = contact; console.log("Successfully received contact: " + JSON.stringify(contact)) },
      (error: Error) => { console.log("Error: ", error) }
    );
  }


  addToFavorites() {
    this.favRequest.emit(this.contact);
  }

}
