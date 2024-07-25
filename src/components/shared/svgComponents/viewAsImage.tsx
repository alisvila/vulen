import Image from "next/image";
import { MouseEventHandler } from "react";

export default function viewAsImage({
  imageSrc,
  onClick,
  ...props
}: {
  imageSrc: string;
  onClick: MouseEventHandler<HTMLImageElement>;
  fill: boolean;
  width: number;
  height: number;
  alt: string;
}) {
  return <Image onClick={onClick} src={imageSrc} {...props} />;
}
