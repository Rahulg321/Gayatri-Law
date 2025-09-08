import { FC, Suspense } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `DetailedExperience`.
 */
export type DetailedExperienceProps =
  SliceComponentProps<Content.DetailedExperienceSlice>;

/**
 * Component for "DetailedExperience" Slices.
 */
const DetailedExperience: FC<DetailedExperienceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 sm:py-20 border-t border-border"
    >
      <Suspense fallback={<div>Loading</div>}>
        <FetchAndDisplayAllExperiences />
      </Suspense>
    </section>
  );
};

export default DetailedExperience;

async function FetchAndDisplayAllExperiences() {
  const prismic = createClient();

  const allExperience = await prismic.getAllByType("experience");

  return (
    <div className="space-y-12 sm:space-y-16">
      <h2 className="text-3xl sm:text-4xl font-light">Detailed Experience</h2>

      <div className="space-y-10">
        {allExperience.map((experience, index) => (
          <div
            key={index}
            className="group space-y-6 p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    {experience.data.name}
                  </h3>
                  <div className="text-muted-foreground">
                    {experience.data.company}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {experience.data.location}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {experience.data.year}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {experience.data.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {experience.data.key_responsibilities.map(
                    (responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility.title}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">
                  Notable Achievements
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {experience.data.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {experience.data.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  {skill.skill_name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
