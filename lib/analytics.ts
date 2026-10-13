export interface WhatsAppEnquiryEvent {
  source: string;
  courseName?: string;
  candidateSegment?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackWhatsAppEnquiry({ source, courseName, candidateSegment }: WhatsAppEnquiryEvent) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    contact_method: 'whatsapp',
    cta_source: source,
    ...(courseName ? { course_name: courseName } : {}),
    ...(candidateSegment ? { candidate_segment: candidateSegment } : {}),
    page_path: window.location.pathname,
  });
}
