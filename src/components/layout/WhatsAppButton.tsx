import { MessageCircle } from "lucide-react";
import { waDefault } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={waDefault}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Konsultasi Naskah</span>
    </a>
  );
}