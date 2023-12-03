import type { PropsWithChildren } from "react";

type TooltipProps = {
  content: string;
  position?: "left" | "right" | "top" | "bottom";
  containerClasses?: string[];
};

const Tooltip = ({
  content,
  children,
  position = "top",
  containerClasses = [],
}: PropsWithChildren<TooltipProps>) => {
  const containerClassNames = [
    "group",
    "relative",
    "flex",
    ...(position === "left" ? ["items-center"] : []),
    ...containerClasses,
  ].join(" ");
  const toolTipClassNames = [
    "fixed",
    "z-50",
    "mx-auto",
    "my-auto",
    "rounded-md",
    "bg-gray-800",
    "px-1",
    "text-sm",
    "text-gray-100",
    "opacity-0",
    "transition-opacity",
    "group-hover:opacity-100",
    ...(position === "left" ? ["translate-x-[40%]"] : []),
    ...(position === "top" ? ["-translate-x-1/2"] : []),
    ...(position === "top" ? ["translate-y-[175%]"] : []),
    ...(position === "top" ? ["left-1/2"] : []),
  ].join(" ");
  return (
    <div className={containerClassNames}>
      {children}
      <span className={toolTipClassNames}>{content}</span>
    </div>
  );
};

export default Tooltip;

//     m-4
