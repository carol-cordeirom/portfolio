import { EXPERIENCE_MAIN, EXPERIENCE_PREVIOUS } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="bg-bg-secondary text-text-secondary-low"
    >
      {/* Main roles */}
      {EXPERIENCE_MAIN.map((role, index) => (
        <div
          key={role.company}
          className="overflow-clip px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-px-xl"
        >
          {index === 0 && (
            <p className="font-inter font-medium text-text-primary-low text-label-md xl:text-label-xl uppercase tracking-[1.2px] mb-[64px] md:mb-[96px] xl:mb-[128px]">
              {"// Experiência profissional"}
            </p>
          )}

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
            {/* Role title & meta */}
            <div className="flex flex-col justify-between gap-6 lg:gap-0 lg:h-full uppercase shrink-0">
              <div className="font-space-grotesk font-normal text-text-secondary-low text-display-role-sm md:text-display-role-md lg:text-display-role-lg xl:text-display-role-xl">
                {role.title.map((line) => (
                  <p key={line} className="leading-[0.985]">
                    {line}
                  </p>
                ))}
              </div>
              <div className="font-inter font-medium text-text-primary-low text-experience-date-sm md:text-experience-date-md xl:text-experience-date-xl lg:text-right">
                <p className="leading-[1.5]">
                  {role.company}, {role.period.split("  //  ")[0]}
                  {"  //"}
                </p>
                <p className="leading-[1.5]">
                  {" "}
                  {role.period.split("  //  ")[1]}
                </p>
              </div>
            </div>

            {/* Bullets */}
            <ul className="list-disc pl-5 w-full lg:w-[785px] space-y-6 md:space-y-8">
              {role.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="font-inter text-body-sm md:text-body-lg xl:text-body-xl text-text-secondary-low"
                >
                  <span className="font-bold">{bullet.bold}</span>
                  <span className="font-normal">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Previous roles */}
      <div className="overflow-clip px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-px-xl">
        <div className="flex flex-col gap-[64px] md:gap-[96px] xl:gap-[124px] uppercase">
          {EXPERIENCE_PREVIOUS.map((role) => (
            <div
              key={role.company}
              className="flex flex-col gap-3 md:gap-4"
            >
              <p className="font-space-grotesk font-normal text-text-secondary-low text-[24px] md:text-heading-role leading-[0.985] tracking-[0.32px]">
                {`${role.role}  //  ${role.company}`}
              </p>
              <p className="font-inter font-medium text-text-primary-low text-experience-date-sm md:text-experience-date-md xl:text-experience-date-xl">
                {role.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
