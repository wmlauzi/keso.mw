/**
 * Hero section — primary conversion entry point.
 * Features headline, subheadline, dual CTA, and trust signal.
 */
import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-cleaning.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Hero = () => (
  <section
    className="relative min-h-screen flex items-center pt-20"
    aria-label="Hero — Professional services in Malawi"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src={heroImg}
        alt=""
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <motion.p {...fadeUp(0)} className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
        Services Beyond Your Expectations
      </motion.p>

      <motion.h1
        {...fadeUp(0.1)}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-section-dark-foreground max-w-3xl text-balance"
      >
        Professional Cleaning, Catering &amp; Decoration Services in Malawi
      </motion.h1>

      <motion.p {...fadeUp(0.3)} className="mt-6 text-lg md:text-xl text-section-dark-foreground/70 max-w-xl">
        Reliable. Affordable. Done Right.
      </motion.p>

      <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href={whatsappLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-8 py-4 text-base font-bold text-whatsapp-foreground hover:brightness-110 transition shadow-lg"
        >
          <WhatsAppIcon />
          Book on WhatsApp
        </a>
        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-lg border-2 border-section-dark-foreground/30 px-8 py-4 text-base font-semibold text-section-dark-foreground hover:bg-section-dark-foreground/10 transition"
        >
          View Services
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 flex items-center gap-3"
      >
        <div className="flex -space-x-2" aria-hidden="true">
          {["K", "E", "S", "O"].map((letter) => (
            <div
              key={letter}
              className="w-8 h-8 rounded-full bg-primary/80 border-2 border-section-dark flex items-center justify-center text-xs font-bold text-primary-foreground"
            >
              {letter}
            </div>
          ))}
        </div>
        <p className="text-sm text-section-dark-foreground/60">
          Trusted by homes &amp; businesses across Malawi
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
