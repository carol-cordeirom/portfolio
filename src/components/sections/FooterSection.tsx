import { KEYWORDS } from "@/data/portfolio";

export default function FooterSection() {
  return (
    <footer className="bg-bg-primary overflow-clip px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-px-xl relative">
      <div className="flex flex-col gap-[120px] md:gap-[200px] lg:gap-[300px] xl:gap-[400px] uppercase">
        <p className="font-inter font-medium text-text-primary-low text-label-md xl:text-label-xl tracking-[1.2px]">
          {"// até logo"}
        </p>
        <h2 className="font-space-grotesk font-normal text-text-primary text-display-footer-sm md:text-display-footer-md lg:text-display-footer-lg xl:text-display-footer-xl">
          obrigada :)
        </h2>
      </div>

      {/* Keywords sidebar — tablet+ */}
      <div className="hidden md:block absolute top-section-py-md xl:top-section-px-xl right-section-px-md xl:right-section-px-xl font-inter font-medium text-text-primary-low text-right text-keyword-md xl:text-[20px] xl:leading-[1.5] uppercase">
        {KEYWORDS.slice(0, 2).map((group, i) => (
          <div key={i} className={i === 0 ? "" : "mt-8"}>
            {group.map((keyword) => (
              <p key={keyword} className="leading-[1.5]">
                {keyword}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
