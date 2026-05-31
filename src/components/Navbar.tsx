/**
 * Sticky navigation bar with mobile-responsive menu.
 * Adds elevated shadow + tighter spacing on scroll.
 */
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/90 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)] border-b border-white/5"
          : "bg-secondary/80 backdrop-blur-md border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`container flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14 md:h-16" : "h-16 md:h-[68px]"
        }`}
      >
        <a
          href="#"
          className="inline-flex items-center transition-transform hover:scale-105"
          aria-label="KESO home"
        >
          <img src="/logo.png" alt="KESO logo" className="h-14 w-auto md:h-16" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-secondary-foreground/75 hover:text-primary transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggle}
          className="md:hidden text-secondary-foreground p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-secondary/95 backdrop-blur-xl overflow-hidden border-t border-white/5"
          >
            <div className="container py-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="py-2 text-secondary-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20"
              >
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
