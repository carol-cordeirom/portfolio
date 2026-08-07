import { CONTACT_LINKS } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-bg-primary overflow-clip px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-py-xl"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-0">
        {/* Left — title */}
        <div className="flex flex-col gap-[80px] md:gap-[120px] lg:gap-[160px] xl:gap-[194px] w-full lg:w-[55%]">
          <p className="font-inter font-medium text-text-primary-low text-label-md xl:text-label-xl uppercase tracking-[1.2px]">
            {"// Contatos"}
          </p>
          <h2 className="font-space-grotesk font-normal text-text-primary uppercase text-display-section-sm md:text-display-section-md lg:text-display-section-lg xl:text-display-section-xl">
            <span className="block">Onde me</span>
            <span className="block">encontrar</span>
          </h2>
        </div>

        {/* Right — links */}
        <div className="flex flex-col gap-10 md:gap-[60px] xl:gap-[80px] w-full lg:w-auto lg:items-end text-left lg:text-right">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "whatsapp" ? "_blank" : undefined}
              rel={link.label === "whatsapp" ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <p className="font-inter font-medium text-text-primary-low uppercase text-contact-label-sm md:text-contact-label-md lg:text-contact-label-lg xl:text-contact-label-xl">
                {link.label}
              </p>
              <p className="font-inter font-normal text-text-primary text-contact-value-sm lg:text-contact-value-lg xl:text-contact-value-xl">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
