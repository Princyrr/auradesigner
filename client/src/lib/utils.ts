import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

/**
 * Cria URL para abrir o WhatsApp com mensagem e telefone pré-definidos.
 * @param message Mensagem para enviar pelo WhatsApp
 * @param phone Número de telefone no formato internacional, sem "+" e sem espaços (ex: "351926404488")
 * @returns URL completa para WhatsApp Web / app
 */
export function createWhatsAppUrl(
  message: string,
  phone = "351926404488"
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
