import { PROJECTS, KEYWORDS } from "@/data/portfolio";

export default function CasesSection() {
  return (
    <section
      id="cases"
      className="bg-bg-primary overflow-clip px-section-px-sm md:px-section-px-md xl:px-section-px-xl py-section-py-sm md:py-section-py-md xl:py-section-px-xl relative"
    >
      <div className="flex flex-col gap-[64px] md:gap-[96px] xl:gap-[128px]">
        {/* Header */}
        <div className="flex flex-col gap-[120px] md:gap-[180px] xl:gap-[245px] uppercase w-full lg:w-[765px]">
          <p className="font-inter font-medium text-text-primary-low text-label-md xl:text-label-xl tracking-[1.2px]">
            {"// meu trabalho"}
          </p>
          <h2 className="font-space-grotesk font-normal text-text-primary text-display-section-sm md:text-display-section-md lg:text-display-section-lg xl:text-display-section-xl">
            <span className="block">{"cases &"}</span>
            <span className="block">estudos</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[64px] md:gap-y-grid-gap-y gap-x-grid-gap-x">
          {PROJECTS.map((project) => (
            <a
              key={project.slug}
              href={`/case/${project.slug}`}
              className="group flex flex-col gap-card-stack-sm md:gap-[40px]"
            >
              <div
                className={`${project.colorClass} h-[280px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-clip relative`}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-[14px] text-text-primary">
                <h3 className="font-space-grotesk font-medium uppercase text-heading-card-sm lg:text-heading-card-lg">
                  {project.title}
                </h3>
                <p className="font-inter font-normal text-card-subtitle-sm lg:text-card-subtitle-lg">
                  {project.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Keywords sidebar — tablet+ */}
      <div className="hidden md:block absolute top-section-py-md xl:top-section-px-xl right-section-px-md xl:right-section-px-xl font-inter font-medium text-text-primary-low text-right text-keyword-md xl:text-[24px] xl:leading-[1.5] uppercase">
        {KEYWORDS.slice(0, 2).map((group, i) => (
          <div key={i} className={i === 0 ? "" : "mt-8"}>
            {group.map((keyword) => (
              <p key={keyword} className="leading-[1.5]">
                {keyword}
              </p>
            ))}
          </div>
        ))}
        <div className="mt-8">
          {KEYWORDS[2].slice(0, 1).map((keyword) => (
            <p key={keyword} className="leading-[1.5]">
              {keyword}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
