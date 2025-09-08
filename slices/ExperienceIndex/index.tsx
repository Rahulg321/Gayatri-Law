import { FC, Suspense } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "@/prismicio";

/**
 * Props for `ExperienceIndex`.
 */
export type ExperienceIndexProps =
  SliceComponentProps<Content.ExperienceIndexSlice>;

/**
 * Component for "ExperienceIndex" Slices.
 */
const ExperienceIndex: FC<ExperienceIndexProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen py-20"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <Link href="/experience" className="group">
            <h2 className="text-3xl sm:text-4xl font-light group-hover:text-muted-foreground transition-colors duration-300">
              Legal Experience
              <svg
                className="inline-block w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </h2>
          </Link>
          <div className="text-sm text-muted-foreground font-mono">
            2017 — 2025
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <FetchAndShowExperiences />
        </Suspense>
      </div>
    </section>
  );
};

export default ExperienceIndex;

async function FetchAndShowExperiences() {
  const prismic = createClient();

  const experiences = await prismic.getAllByType("experience");

  if (!experiences || experiences.length === 0) {
    return <div></div>;
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {experiences.map((experience, index) => (
        <Link
          key={index}
          href={`/experience/${experience.uid}`}
          className="block"
        >
          <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-all duration-500 cursor-pointer">
            <div className="lg:col-span-2">
              <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                {experience.data.year}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div>
                <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {experience.data.name}
                  <svg
                    className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
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
                </h3>
                <div className="text-muted-foreground">
                  {experience.data.company}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {experience.data.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
              {experience.data.expertise.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
