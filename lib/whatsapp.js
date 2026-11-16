/**
 * Central WhatsApp Configuration and Messaging Utilities
 * Horizon Tourism & Visas Co.
 */

// Replace with actual business WhatsApp number (Country code without '+' or special chars)
export const WHATSAPP_CONFIG = {
  phoneNumber: "919876543210", // Primary business WhatsApp placeholder
  displayNumber: "+91 98765 43210",
  businessHours: "Mon - Sat: 9:30 AM - 7:30 PM (IST)",
  email: "support@horizontourism.com",
  location: "New Delhi, India"
};

/**
 * Builds standard WhatsApp click-to-chat URL
 * @param {string} message - Plain text message to encode
 * @param {string} [phone] - Optional phone number override
 * @returns {string} wa.me URL
 */
export function buildWhatsAppUrl(message, phone = WHATSAPP_CONFIG.phoneNumber) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Formats a Dummy Ticket enquiry message
 */
export function formatDummyTicketMessage(data) {
  const tripType = data.tripType === 'round' ? 'Round Trip' : 'One Way';
  const returnInfo = data.tripType === 'round' && data.returnDate 
    ? `\n📅 *Return Date:* ${data.returnDate}` 
    : '';

  return `✈️ *NEW DUMMY TICKET / FLIGHT ITINERARY ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
*Customer Details:*
👤 *Name:* ${data.fullName || 'Not provided'}
📱 *WhatsApp:* ${data.whatsapp || 'Not provided'}
✉️ *Email:* ${data.email || 'Not provided'}

*Flight Details:*
🔄 *Trip Type:* ${tripType}
🛫 *From:* ${data.fromAirport || 'Not specified'}
🛬 *To:* ${data.toAirport || 'Not specified'}
📅 *Departure Date:* ${data.departureDate || 'Not specified'}${returnInfo}
👥 *Passengers:* ${data.passengers || 1} Adult(s)

*Additional Notes / Requirements:*
${data.notes ? data.notes : 'None'}

━━━━━━━━━━━━━━━━━━━━
_Enquiry submitted via Horizon Tourism & Visas Co. portal._
_Please assist with documentation/itinerary reservation details._`;
}

/**
 * Formats a Visa Application enquiry message
 */
export function formatVisaEnquiryMessage({ country, visaType, customerName, phone, travelDate, notes }) {
  return `🛂 *NEW VISA ASSISTANCE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
*Destination:* ${country || 'International Destination'}
*Visa Category:* ${visaType || 'Tourist / Business Visa'}

*Customer Details:*
👤 *Name:* ${customerName || 'Prospective Traveler'}
📱 *Contact:* ${phone || 'Not provided'}
📅 *Intended Travel Date:* ${travelDate || 'Flexible / Planning stage'}

*Specific Questions / Message:*
${notes ? notes : 'I would like to check document requirements, processing time, and assistance fees.'}

━━━━━━━━━━━━━━━━━━━━
_Enquiry via Horizon Tourism & Visas Co. Website_`;
}

/**
 * Formats a Holiday Package enquiry message
 */
export function formatHolidayEnquiryMessage({ packageName, destination, duration, travelers, travelDate, customerName, phone, notes }) {
  return `🏖️ *HOLIDAY PACKAGE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
*Package:* ${packageName || 'Custom Holiday Package'}
*Destination:* ${destination || 'Not specified'}
*Duration:* ${duration || 'Custom'}

*Trip Requirements:*
👥 *Travelers:* ${travelers || '2 Adults'}
📅 *Target Month / Date:* ${travelDate || 'Upcoming season'}

*Customer Details:*
👤 *Name:* ${customerName || 'Traveler'}
📱 *Contact:* ${phone || 'Not provided'}

*Special Requests:*
${notes ? notes : 'Please share detailed itinerary, hotel options, and best quote.'}

━━━━━━━━━━━━━━━━━━━━
_Enquiry via Horizon Tourism & Visas Co._`;
}

/**
 * Formats a Documentation Service enquiry message
 */
export function formatDocumentationMessage({ serviceTitle, travelerName, phone, passportNumber, remarks }) {
  return `📋 *TRAVEL DOCUMENTATION ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
*Service:* ${serviceTitle || 'Travel Documentation'}

*Customer Details:*
👤 *Name:* ${travelerName || 'Applicant'}
📱 *Contact:* ${phone || 'Not provided'}
🛂 *Passport / Reference:* ${passportNumber || 'Will provide on chat'}

*Specific Requirements:*
${remarks ? remarks : 'Please guide me through the required documents and submission process.'}

━━━━━━━━━━━━━━━━━━━━
_Enquiry via Horizon Tourism & Visas Co._`;
}

/**
 * Formats a General Contact enquiry message
 */
export function formatGeneralEnquiryMessage({ name, phone, email, subject, message }) {
  return `💬 *GENERAL TRAVEL ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
*Customer:* ${name || 'Prospective Client'}
📱 *Phone:* ${phone || 'Not provided'}
✉️ *Email:* ${email || 'Not provided'}
📌 *Topic / Subject:* ${subject || 'General Assistance'}

*Message:*
${message || 'Hi, I need assistance with your travel services.'}

━━━━━━━━━━━━━━━━━━━━
_Sent from Horizon Tourism & Visas Co._`;
}
