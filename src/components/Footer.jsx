export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono-ui text-xs text-text-faint">
          <span className="text-online">$</span> © 2026 Lucky Gupta — all rights reserved
        </p>
        <p className="font-mono-ui text-xs text-text-faint">
          Made with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
