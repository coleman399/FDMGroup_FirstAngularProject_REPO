import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts!: Contact[];
  // used to retrieve contacts from spring boot api
  // readonly BASE_URL: string = 'http://localhost:8080/api/v2/contacts';
  readonly BASE_URL: string = 'api/contacts/';
  readonly HEADERS = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private HttpClient: HttpClient) {
  }

  getContacts(): Promise<Contact[]> {
    return lastValueFrom(this.HttpClient.get<Contact[]>(this.BASE_URL, {headers: this.HEADERS}));
  }

  getContact(id: number) {
    return lastValueFrom(this.HttpClient.get<Contact>(this.BASE_URL + id, { headers: this.HEADERS }));
  }
}
