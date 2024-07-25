// import classNames from "classnames";

type Color = "primary" | "secondary" | "grey";
type borderRadius = "24" | "4";
export function PRButton({
  title = "ورود",
  color = "primary",
  radius = "24",
  onClick,
  className,
  isDisabled = false,
  icon,
  isLoading = false,
  ...rest
}: {
  title?: string | React.ReactNode;
  color?: Color;
  radius?: borderRadius;
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  isLoading: boolean;
  [rest: string]: any;
}) {
  // const classes = classNames(
  //   "btn",
  //   className,
  //   { [`btn-${color}`]: color },
  //   { "rounded-3xl": radius === "24" },
  //   { rounded: radius === "4" },
  //   { "btn-disabled": isDisabled || isLoading }
  // );

  const classes = "btn rounded-3x1"

  return (
    <button
      onClick={isDisabled ? () => {} : onClick}
      className={classes}
      {...rest}
    >
      {/* {isLoading && (<Spinner className={"ml-2"} />)} */}
      {icon}
      {title}
    </button>
  );
}
