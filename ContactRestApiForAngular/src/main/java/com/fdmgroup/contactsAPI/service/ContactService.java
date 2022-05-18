package com.fdmgroup.contactsAPI.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fdmgroup.contactsAPI.exception.ContactNotFoundException;
import com.fdmgroup.contactsAPI.model.Contact;
import com.fdmgroup.contactsAPI.repository.ContactRepository;

@Service
public class ContactService {

	private ContactRepository contactRepo;

	public ContactService(ContactRepository contactRepo) {
		super();
		this.contactRepo = contactRepo;
	}

	public List<Contact> getContacts() {
		return contactRepo.findAll();
	}

	public Contact getContact(long contactId) {
		return contactRepo.findById(contactId)
				.orElseThrow(() -> new ContactNotFoundException("Contact with id " + contactId + " not found."));
	}

	public long createContact(Contact contact) {
		return contactRepo.save(contact).getContactId();
	}

	public void updateContact(long contactId, Contact contact) {
		contact.setContactId(contactId);
		contactRepo.save(contact);

	}

	public void updateContact(Contact contact) {
		contactRepo.save(contact);
	}

	public void deleteContact(long contactId) {
		contactRepo.deleteById(contactId);
	}

	public List<Contact> searchContacts(String query) {
		return contactRepo.search(query);
	}

	public List<Contact> createContacts(List<Contact> contacts) {
		return contactRepo.saveAll(contacts);
	}

}
