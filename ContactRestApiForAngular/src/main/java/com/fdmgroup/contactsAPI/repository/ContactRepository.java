package com.fdmgroup.contactsAPI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fdmgroup.contactsAPI.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

	@Query(value = "SELECT c FROM Contact c WHERE upper(c.firstName) LIKE concat('%', upper(:query), '%')" +
	" OR upper(c.lastName) LIKE concat('%', upper(:query), '%')" +
	" OR upper(c.middleName) LIKE concat('%', upper(:query), '%')" +
	" OR upper(c.phoneNumber) LIKE concat('%', upper(:query), '%')" +
	" OR upper(c.email) LIKE concat('%', upper(:query), '%')")
	List<Contact> search(String query);

}
