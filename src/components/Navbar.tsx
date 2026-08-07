import { NAV_ITEMS } from "@/data/portfolio";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-navbar-h border-b border-subtle bg-bg-primary">
      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-center gap-navbar-gap h-full px-section-px-md lg:px-[80px]">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              className={`py-8 uppercase font-space-grotesk ${
                isActive
                  ? "text-nav-selected font-bold text-text-primary"
                  : "text-nav-default font-normal text-text-primary-low"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile nav */}
      <div className="flex md:hidden items-center justify-between h-full px-section-px-sm">
        <a href="#home" className="font-space-grotesk font-medium text-text-primary text-[14px] uppercase tracking-[0.84px]">
          Carol Cordeiro
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-[6px] p-2"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-transform ${
              mobileOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-transform ${
              mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-b border-subtle px-section-px-sm pb-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 uppercase font-space-grotesk text-nav-default text-text-primary-low"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
