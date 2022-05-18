import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {contacts: [
      { id: 1, firstName: 'Andre', middleName: 'M', lastName: 'Kolber', email: 'andre.kolber@email.com', phoneNumber: '+1 (111) 123 - 1234' },

      { id: 2, firstName: 'Dillon', middleName: 'N/A', lastName: 'Coleman', email: 'dillon.coleman@email.com', phoneNumber: '+1 (111) 423 - 1294' },

      { id: 3, firstName: 'Jeff', middleName: 'N/A', lastName: 'Thomassen', email: 'jeff.thomassen@email.com', phoneNumber: '+1 (355) 776 - 2475' },

      { id: 4, firstName: 'Liam', middleName: 'N/A', lastName: 'Harrington', email: 'liam.harrington@email.com', phoneNumber: '+1 (111) 423 - 1294' },

      { id: 5, firstName: 'Patrick', middleName: 'N/A', lastName: 'Hedquist', email: 'patrick.hedquist@email.com', phoneNumber: '+1 (111) 423 - 1294' },

      { id: 6, firstName: 'Linette', middleName: 'N', lastName: 'Mora', email: 'linette.mora@email.com', phoneNumber: '+1 (111) 423 - 1294' }
    ]};
  }
}
