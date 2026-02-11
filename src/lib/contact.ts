export const CONTACT_PHONE_DISPLAY = "+52 624 264 4012";
export const CONTACT_PHONE_E164 = "+526242644012";
export const CONTACT_PHONE_DIGITS = "526242644012";

export const CONTACT_EMAIL = "hola@searchvisionary.tech";

export const CONTACT_TEL_LINK = `tel:${CONTACT_PHONE_E164}`;
export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;

// Direct WhatsApp deep link using international number without + or spaces.
export const CONTACT_WHATSAPP_LINK = `https://wa.me/${CONTACT_PHONE_DIGITS}`;

export const CONTACT_PATHS = {
  es: "/agendar",
  en: "/en/schedule",
} as const;
