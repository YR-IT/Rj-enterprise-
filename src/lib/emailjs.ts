import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Steps to set this up:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add a new Email Service (choose Gmail) → copy the Service ID
// 3. Create a new Email Template → copy the Template ID
//    In the template body you can use variables like:
//      {{from_name}}, {{from_phone}}, {{service}}, {{facility}},
//      {{locality}}, {{staff_count}}, {{message}}, {{form_type}}
// 4. Go to Account → Public Key → copy it here
// 5. Set your Gmail as the "To Email" inside the EmailJS template

export const EMAILJS_CONFIG = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export interface EmailPayload {
  form_type: string;
  from_name: string;
  from_phone: string;
  from_email?: string;
  service: string;
  facility: string;
  locality: string;
  staff_count?: string;
  message?: string;
}

/**
 * Sends an inquiry email via EmailJS.
 * Returns true on success, false on failure.
 */
export async function sendInquiryEmail(payload: EmailPayload): Promise<boolean> {
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      payload as unknown as Record<string, unknown>,
      EMAILJS_CONFIG.publicKey
    );
    return true;
  } catch (error) {
    console.error('EmailJS send error:', error);
    return false;
  }
}
