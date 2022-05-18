package com.fdmgroup.contactsAPI.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CONTACT_ID_GEN")
	@SequenceGenerator(name = "CONTACT_ID_GEN", sequenceName = "CONTACT_ID_SEQ")
	private long contactId;
	@NotBlank(message = "First Name cannot be left blank.")
	private String firstName;
	@NotBlank(message = "Middle Name cannot be blank. If you do not have a middle name, please enter N/A")
	private String middleName;
	@NotBlank(message = "Last Name cannot be left blank.")
	private String lastName;
	@Email
	@NotNull
	private String email;
	@Pattern(regexp = "\\+[0-9]{1,3} \\([0-9]{3}\\) [0-9]{3} - [0-9]{4}")
	private String phoneNumber;

	public Contact() {
	}

	public long getContactId() {
		return contactId;
	}

	public void setContactId(long contactId) {
		this.contactId = contactId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	@Override
	public int hashCode() {
		return Objects.hash(contactId, email, firstName, lastName, middleName, phoneNumber);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Contact other = (Contact) obj;
		return contactId == other.contactId && Objects.equals(email, other.email)
				&& Objects.equals(firstName, other.firstName) && Objects.equals(lastName, other.lastName)
				&& Objects.equals(middleName, other.middleName) && Objects.equals(phoneNumber, other.phoneNumber);
	}

	@Override
	public String toString() {
		return "Contact [contactId=" + contactId + ", firstName=" + firstName + ", middleName=" + middleName
				+ ", lastName=" + lastName + ", email=" + email + ", phoneNumber=" + phoneNumber + "]";
	}

}
