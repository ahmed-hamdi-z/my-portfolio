import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl rounded-full border-b-2 px-3 py-3 border-zinc-500 font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
