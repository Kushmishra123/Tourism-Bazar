/**
 * Client-side form validation helpers
 */

export function validateDummyTicketForm(formData) {
  const errors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full legal name.";
  }

  if (!formData.whatsapp || formData.whatsapp.trim().length < 8) {
    errors.whatsapp = "Please enter a valid WhatsApp contact number.";
  }

  if (!formData.fromAirport || formData.fromAirport.trim().length === 0) {
    errors.fromAirport = "Please select a departure airport.";
  }

  if (!formData.toAirport || formData.toAirport.trim().length === 0) {
    errors.toAirport = "Please select a destination airport.";
  }

  if (formData.fromAirport && formData.toAirport && formData.fromAirport === formData.toAirport) {
    errors.toAirport = "Departure and destination airports cannot be the same.";
  }

  if (!formData.departureDate) {
    errors.departureDate = "Please choose your departure date.";
  } else {
    const dep = new Date(formData.departureDate);
    dep.setHours(0, 0, 0, 0);
    if (dep < today) {
      errors.departureDate = "Departure date cannot be in the past.";
    }
  }

  if (formData.tripType === 'round') {
    if (!formData.returnDate) {
      errors.returnDate = "Please choose a return date for round trip.";
    } else {
      const dep = new Date(formData.departureDate);
      const ret = new Date(formData.returnDate);
      if (ret < dep) {
        errors.returnDate = "Return date cannot be earlier than departure date.";
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContactForm(formData) {
  const errors = {};
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!formData.phone || formData.phone.trim().length < 8) {
    errors.phone = "Please enter a valid WhatsApp or phone number.";
  }
  if (!formData.message || formData.message.trim().length < 5) {
    errors.message = "Please write a brief message outlining your requirements.";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
