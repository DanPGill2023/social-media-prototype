import Image from "next/image";

import Tooltip from "~/components/common/Tooltip";

type ButtonProps = {
  onClick: React.MouseEventHandler;
  src: string;
  alt: string;
};

type SideBarButtonProps = ButtonProps & {
  tooltipContent: string;
  tooltipContainerClasses?: string[];
  disableToolTip?: boolean;
};

const Button = ({ onClick, src, alt }: ButtonProps) => {
  return (
    <button role="button" onClick={onClick}>
      <Image style={{ height: "32px", width: "16px" }} src={src} alt={alt} />
    </button>
  );
};

const SideBarButton = ({
  tooltipContent,
  tooltipContainerClasses,
  onClick,
  src,
  alt,
  disableToolTip,
}: SideBarButtonProps) => {
  if (disableToolTip) {
    return (
      <div role="button" onClick={onClick} className="flex items-center p-1">
        <Button onClick={onClick} src={src} alt={alt} />
        <p className="flex flex-1 justify-center font-bold text-pink-rabbits">
          {tooltipContent}
        </p>
      </div>
    );
  }
  return (
    <Tooltip
      containerClasses={tooltipContainerClasses}
      position="left"
      content={tooltipContent}
    >
      <Button onClick={onClick} src={src} alt={alt} />
    </Tooltip>
  );
};

export default SideBarButton;
