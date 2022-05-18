package com.fdmgroup.contactsAPI.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ContactNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5672823777322830031L;

	public ContactNotFoundException() {
		super();
	}

	public ContactNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public ContactNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public ContactNotFoundException(String message) {
		super(message);
	}

	public ContactNotFoundException(Throwable cause) {
		super(cause);
	}

}
