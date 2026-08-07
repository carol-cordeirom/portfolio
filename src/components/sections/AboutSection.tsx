import { ABOUT } from "@/data/portfolio";
import cornerDecoration from "@/assets/icons/corner-decoration.svg";

export default function AboutSection() {
  return (
    <section
      id="sobre-mim"
      className="bg-bg-primary overflow-clip px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-px-xl"
    >
      <div className="flex flex-col gap-[80px] md:gap-[120px] xl:gap-[154px]">
        <p className="font-inter font-medium text-text-primary-low text-label-md xl:text-label-xl uppercase tracking-[1.2px]">
          {"// sobre mim"}
        </p>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          {/* Name & role */}
          <div className="flex flex-col justify-between gap-8 lg:gap-0 lg:h-[529px] uppercase w-full lg:w-auto">
            <div className="font-space-grotesk font-normal text-text-primary text-display-name-sm md:text-display-name-md lg:text-display-name-lg xl:text-display-name-xl">
              {ABOUT.name.map((line) => (
                <p key={line} className="leading-[0.985]">
                  {line}
                </p>
              ))}
            </div>
            <p className="font-basis-grotesque text-text-primary-low text-about-role-sm md:text-about-role-md lg:text-about-role-lg xl:text-about-role-xl lg:text-right">
              {ABOUT.role[0]}
              <br />
              {ABOUT.role[1]}
            </p>
          </div>

          {/* Portrait */}
          <div className="relative w-full max-w-[392px] lg:w-[436px] mx-auto lg:mx-0 shrink-0">
            <div className="bg-bg-primary overflow-clip aspect-[392/551]">
              <img
                src="/images/carol-portrait.png"
                alt="Carol Cordeiro"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src={cornerDecoration}
              alt=""
              className="absolute bottom-0 left-0 w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
            />
            <img
              src={cornerDecoration}
              alt=""
              className="absolute top-0 right-0 w-[32px] h-[32px] md:w-[44px] md:h-[44px] rotate-180"
            />
          </div>

          {/* Bio */}
          <div className="font-inter font-normal text-text-primary text-body-sm md:text-body-lg xl:text-body-xl w-full lg:w-[496px]">
            {ABOUT.bio.map((paragraph, i) => (
              <p
                key={i}
                className={i < ABOUT.bio.length - 1 ? "mb-6 md:mb-8" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
