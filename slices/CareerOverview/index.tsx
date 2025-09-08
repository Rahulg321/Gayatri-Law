import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CareerOverview`.
 */
export type CareerOverviewProps =
  SliceComponentProps<Content.CareerOverviewSlice>;

const CareerOverview: FC<CareerOverviewProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 sm:py-20 border-t border-border"
    >
      <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-light">
            {slice.primary.heading}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {slice.primary.tagline}
          </p>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {slice.primary.career.map((stat, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
            >
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-light text-foreground">
                  {stat.title}
                </div>
                <div className="text-sm font-medium">{stat.tag}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
