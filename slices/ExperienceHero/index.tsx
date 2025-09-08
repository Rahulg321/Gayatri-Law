import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `ExperienceHero`.
 */
export type ExperienceHeroProps =
  SliceComponentProps<Content.ExperienceHeroSlice>;

/**
 * Component for "ExperienceHero" Slices.
 */
const ExperienceHero: FC<ExperienceHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <header className="py-12 sm:py-16 border-b border-border">
        <div className="flex items-center justify-between">
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
        </div>
      </header>

      <div className="spy-16 sm:py-20 space-y-6">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground font-mono tracking-wider">
            {slice.primary.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            {slice.primary.heading_first_name}
            <br />
            <span className="text-muted-foreground">
              {slice.primary.heading_last_name}
            </span>
          </h1>
        </div>
        <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceHero;
