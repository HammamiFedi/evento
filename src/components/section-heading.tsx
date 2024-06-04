import React from "react";

type SectionHeadingProps = {
  children: string;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-2xl mb-4">{children}</h2>;
}

export default SectionHeading;
