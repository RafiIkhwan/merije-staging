const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// merije-engine is still in development; fall back to WhatsApp until its URL is set.
export const ENGINE_URL =
  process.env.NEXT_PUBLIC_MERIJE_ENGINE_URL ||
  getWhatsAppUrl("Halo Merijé, saya ingin membuat undangan digital.");
