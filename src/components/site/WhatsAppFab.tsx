import { MessageCircle } from "lucide-react";
import { waGeneral } from "@/lib/wa";

export default function WhatsAppFab() {
  return (
    <a
      href={waGeneral}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={1.75} />
    </a>
  );
}
