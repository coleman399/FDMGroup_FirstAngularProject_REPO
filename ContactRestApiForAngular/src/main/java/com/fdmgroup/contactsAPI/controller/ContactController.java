package com.fdmgroup.contactsAPI.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fdmgroup.contactsAPI.model.Contact;
import com.fdmgroup.contactsAPI.service.ContactService;

@RestController
@RequestMapping("/api/v2/contacts")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {
	private ContactService contactService;

	public ContactController(ContactService contactService) {
		super();
		this.contactService = contactService;
	}

	@GetMapping
	public List<Contact> getContacts() {
		return contactService.getContacts();
	}
	
	@GetMapping("/details/{id}")
	public Contact getContact(@PathVariable("id") long contactId) {
		return contactService.getContact(contactId);
	}
	
	@GetMapping("/search/{query}")
	public List<Contact> searchContacts(@PathVariable String query) {
		return contactService.searchContacts(query);
	}
	
	@PostMapping("/createList")
	public ResponseEntity<List<Contact>> postContacts(@Valid @RequestBody List<Contact> contacts) {
		List<Contact> created = contactService.createContacts(contacts);
		URI rootLocation = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
		return ResponseEntity.created(rootLocation).body(created);
	}
	
	@PostMapping
	public ResponseEntity<Contact> postContact(@Valid @RequestBody Contact contact) {
		long contactId = contactService.createContact(contact);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(contactId).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping("/update/{id}")
	public void putContact(@PathVariable("id") long contactId, @Valid @RequestBody Contact contact) {
		contactService.updateContact(contactId, contact);
	}
	
	@PutMapping
	public void putContact(@Valid @RequestBody Contact contact) {
		contactService.updateContact(contact);
	}
	
	@DeleteMapping("delete/{id}")
	public void deleteContact(@PathVariable("id") long contactId) {
		contactService.deleteContact(contactId);
	}
	
}
