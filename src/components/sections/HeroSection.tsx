import { KEYWORDS } from "@/data/portfolio";
import yearBadge from "@/assets/icons/year-badge.svg";
import stampBadge from "@/assets/icons/stamp-badge.svg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-bg-primary overflow-clip pt-navbar-h"
    >
      <div className="flex flex-col gap-[120px] md:gap-[168px] lg:gap-[200px] xl:gap-[216px]">
        {/* Decorations row */}
        <div className="flex items-center justify-between h-[140px] md:h-[180px] lg:h-[220px] xl:h-[251px]">
          <div className="w-[160px] md:w-[200px] lg:w-[250px] xl:w-[286px] h-full relative">
            <img
              src={yearBadge}
              alt=""
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="w-[140px] md:w-[180px] lg:w-[220px] xl:w-[251px] h-[140px] md:h-[180px] lg:h-[220px] xl:h-[251px] relative">
            <img
              src={stampBadge}
              alt=""
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Hero content */}
        <div className="flex flex-col items-end uppercase">
          <h1 className="font-space-grotesk font-normal text-text-primary text-right w-full text-display-hero-sm md:text-display-hero-md lg:text-display-hero-lg xl:text-display-hero-xl">
            Portfólio
          </h1>

          {/* Keywords bar */}
          <div className="flex flex-col md:flex-row items-start md:items-start justify-between w-full px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-px-xl gap-8 md:gap-0">
            <div className="flex flex-col md:flex-row gap-8 md:gap-[100px] lg:gap-[150px] xl:gap-[200px]">
              {KEYWORDS.slice(0, 2).map((group, i) => (
                <div
                  key={i}
                  className="font-inter font-medium not-italic text-text-primary-low text-keyword-sm md:text-keyword-md xl:text-keyword-xl"
                >
                  {group.map((keyword) => (
                    <p key={keyword} className="leading-[1.5]">
                      {keyword}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="font-inter font-medium not-italic text-text-primary-low text-keyword-sm md:text-keyword-md xl:text-keyword-xl">
              {KEYWORDS[2].map((keyword) => (
                <p key={keyword} className="leading-[1.5]">
                  {keyword}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
