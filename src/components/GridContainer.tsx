import type { ElementType } from "react";
import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  breakpoint?: "lg" | "xl" | "2xl";
  as?: ElementType;
}

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className,
  innerClassName,
  as: Tag = "section",
  ...props
}) => {
  return (
    <div
      className={`grid grid-cols-[1fr_min(1216px,100%)_1fr] [&>*]:col-[2] ${
        className ?? ""
      }`}
      {...props}
    >
      <Tag
        className={`grid grid-cols-12 gap-6 relative ${innerClassName || ""}`}
      >
        {children}
      </Tag>
    </div>
  );
};
export default GridContainer;
