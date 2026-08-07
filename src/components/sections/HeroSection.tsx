import { KEYWORDS } from "@/data/portfolio";

function YearBadge() {
  return (
    <div className="w-full h-full relative overflow-hidden select-none" aria-hidden="true">
      <div
        className="absolute font-space-grotesk font-normal text-shape-decorative-low leading-[0.9] tracking-[-0.02em]"
        style={{
          fontSize: "clamp(80px, 10vw, 140px)",
          transform: "rotate(-20deg)",
          transformOrigin: "center center",
          top: "-10%",
          left: "-5%",
        }}
      >
        <span className="block">// 20</span>
        <span className="block pl-[0.6em]">26</span>
      </div>
    </div>
  );
}

function StampBadge() {
  const text = "DESIGN • DESIGN • DESIGN • DESIGN • ";
  return (
    <div className="w-full h-full relative select-none" aria-hidden="true">
      <svg viewBox="0 0 251 251" className="w-full h-full">
        <defs>
          <path
            id="stamp-circle"
            d="M 125.5,125.5 m -95,0 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0"
          />
        </defs>
        <text
          fill="#434549"
          fontSize="16"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="500"
          letterSpacing="6"
        >
          <textPath href="#stamp-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-bg-primary overflow-clip pt-navbar-h"
    >
      <div className="flex flex-col gap-[120px] md:gap-[168px] lg:gap-[200px] xl:gap-[216px]">
        {/* Decorations row */}
        <div className="flex items-center justify-between h-[140px] md:h-[180px] lg:h-[220px] xl:h-[251px]">
          <div className="w-[160px] md:w-[200px] lg:w-[250px] xl:w-[286px] h-full">
            <YearBadge />
          </div>
          <div className="w-[140px] md:w-[180px] lg:w-[220px] xl:w-[251px] h-[140px] md:h-[180px] lg:h-[220px] xl:h-[251px]">
            <StampBadge />
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
