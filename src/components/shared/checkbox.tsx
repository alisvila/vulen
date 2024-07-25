import classNames from "classnames";

export function CheckBox({
  title = "ورود",
  checked,
  onChecked,
  className,
  isDisabled = false,
  element
}: {
  element: any
  title?: string | React.ReactNode;
  onChecked?: any;
  className?: string;
  isDisabled?: boolean;
  checked?: boolean;
}) {
  const classes = classNames(
    "checkBox",
    className
    // { "rounded-3xl": radius === "24" },
    // { rounded: radius === "4" },
    // { "btn-disabled": isDisabled || isLoading }
  );

  return (
    <>
      <input className={classes} type='checkbox' checked={element.checked} onClick={() => onChecked(element)}/>
      {element && <label>{element.id}</label>}
    </>
  );
}
