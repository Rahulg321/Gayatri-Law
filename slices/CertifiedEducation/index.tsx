import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CertifiedEducation`.
 */
export type CertifiedEducationProps =
  SliceComponentProps<Content.CertifiedEducationSlice>;

/**
 * Component for "CertifiedEducation" Slices.
 */
const CertifiedEducation: FC<CertifiedEducationProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 sm:py-20 border-t border-border"
    >
      <div className="space-y-12">
        <h2 className="text-3xl sm:text-4xl font-light">
          Certifications & Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Professional Certifications</h3>
            <div className="space-y-4">
              {slice.primary.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 border border-border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {cert.organization}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium">Education & Training</h3>
            <div className="space-y-4">
              {slice.primary.education_and_training.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 border border-border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{edu.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {edu.location}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {edu.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedEducation;
