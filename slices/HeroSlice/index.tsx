import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeroSliceProps = SliceComponentProps<Content.HeroSliceSlice>;

const HeroSlice: FC<HeroSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <div id="intro" className="min-h-screen flex items-center">
        <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-2">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                {slice.primary.tagline}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                {slice.primary.first_name}
                <br />
                <span className="text-muted-foreground">
                  {slice.primary.last_name}
                </span>
              </h1>
            </div>

            <div className="space-y-6 max-w-md">
              <div>
                <PrismicRichText field={slice.primary.description} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new clients
                </div>
                <div>Remote • US Time Zones</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
              <div className="relative">
                <PrismicNextImage
                  field={slice.primary.person_image}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-border hover:border-muted-foreground/50 transition-all duration-500 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-background/10"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-mono">
                CURRENTLY
              </div>
              <div className="space-y-2">
                <div className="text-foreground">
                  {slice.primary.current_position_name}
                </div>
                <div className="text-muted-foreground">
                  {slice.primary.current_position_place}
                </div>
                <div className="text-xs text-muted-foreground">
                  {slice.primary.current_position_timeline}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-mono">
                EXPERTISE
              </div>
              <div className="flex flex-wrap gap-2">
                {slice.primary.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {skill.expertise_name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlice;
