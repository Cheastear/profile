export function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55 font-medium">
        <span>© 2026 Kyrylo Vitoshkin</span>
        <nav className="flex items-center gap-5">
          <a href="/about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
          <a href="/editorial-policy" className="hover:text-white transition-colors duration-200">Editorial Policy</a>
        </nav>
      </div>
    </footer>
  );
}
