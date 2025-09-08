import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function JobExperiencePage({
  params,
}: {
  params: { uid: string };
}) {
  const prismic = createClient();

  const currentExperience = await prismic.getByUID("experience", params.uid);

  const {
    name,
    year,
    company,
    description,
    location,
    key_responsibilities,
    achievements,
    skills,
    technologies,
    case_types_practice_areas,
  } = currentExperience.data;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-12 sm:py-16 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Back to Portfolio</span>
            </Link>

            <Link
              href="/experience"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span>All Experience</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-16 sm:py-20 ">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              {year}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              {name}
            </h1>
            <div className="text-xl text-muted-foreground">{company}</div>
            <div className="text-xs text-muted-foreground">{location}</div>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20  border-t border-border">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light">Role Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Detailed breakdown of responsibilities and impact in this
              position.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Responsibilities</h3>
              <ul className="space-y-3">
                {key_responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      {responsibility.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 sm:py-20  border-t border-border">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light">
            Notable Achievements
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 sm:py-20  border-t border-border">
        <div className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-light">
            Skills & Technologies
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {skill.skill_name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-muted/20 border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20  border-t border-border">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light">
            Case Types & Practice Areas
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {case_types_practice_areas.map((caseType, index) => (
              <div
                key={index}
                className="p-4 border border-border rounded-lg text-center hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <span className="text-muted-foreground">{caseType.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20  border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
          >
            <span>View All Experience</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
