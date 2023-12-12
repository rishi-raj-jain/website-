import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  variant?: "dark" | "white";
  fullBleed?: boolean;
}

const bgColorMapping = {
  dark: "bg-neutral-800",
  white: "bg-white",
  default: "bg-neutral-50",
  none: "bg-transparent"
};

const ContentSection: React.FC<Props> = ({
  className,
  children,
  id,
  variant = "none" as const,
  fullBleed,
}) => {
  return (
    <section
      className={`${fullBleed ? "!col-[1/4]" : "col-span-12"} w-full${
        bgColorMapping[variant]
      } relative ${className || ""}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default ContentSection;
