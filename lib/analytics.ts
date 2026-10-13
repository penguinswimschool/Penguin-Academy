export interface WhatsAppEnquiryEvent {
  source: string;
  courseName?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackWhatsAppEnquiry({ source, courseName }: WhatsAppEnquiryEvent) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    lead_source: 'whatsapp',
    enquiry_source: source,
    course_name: courseName,
    page_path: window.location.pathname,
  });
}
