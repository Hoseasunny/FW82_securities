import { SectionHeading } from "./SectionHeading";

export const SectionHeader = ({ title, subtitle, align = "left" }) => {
  return (
    <SectionHeading title={title} subtitle={subtitle} align={align} />
  );
};
