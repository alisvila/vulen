import { MouseEventHandler, ReactNode } from "react";

export default function ViewAsButton({
  children,
  onClick,
  className
}: {
  children: ReactNode | ReactNode[];
  onClick: MouseEventHandler<HTMLImageElement>;
  className?: string
}) {
  return <span onClick={onClick} className={className}>{children}</span>;
}
