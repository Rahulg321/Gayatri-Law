import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta: FC<CtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 sm:py-20 border-t border-border"
    >
      <div className="text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-light">
          {slice.primary.heading}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {slice.primary.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:sarah.mitchell@legalservices.com"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
          >
            <span>Get in Touch</span>
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
      </div>
    </section>
  );
};

export default Cta;
