export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521959247775?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Monique%20Ranauro."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-accent bg-background px-4 py-3 text-sm font-medium text-accent shadow-lg transition-colors duration-200 hover:bg-accent hover:text-background"
    >
      <span className="font-heading text-base font-semibold leading-none">
        W
      </span>
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}
