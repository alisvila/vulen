// import classNames from "classnames";
import type { InputHTMLAttributes } from "react";

type Color = "primary" | "secondary" | "grey";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
  placeholder?: string;
  color?: Color;
  rootClassName?: string;
  className?: string;
  error?: string | any;
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isRequired?: boolean;
  defaultValue?: string;
}
export function TextInput({
  label = "نام",
  placeholder = "وارد کنید",
  color,
  className,
  rootClassName,
  error,
  isDisabled = false,
  startIcon,
  endIcon,
  isRequired,
  defaultValue,
  ...rest
}: InputGroupProps) {
  // const classes = classNames(
  //   "inputText",
  //   className,
  //   { [`inputText-${color}`]: color },
  //   { "inputText-error": error },
  //   { "inputText-disabled": isDisabled },
  //   { "inputText-startIcon": startIcon }
  // );

  const classes = "inputText"

  return (
    <div className={`w-full flex flex-col p-0 relative ${rootClassName}`}>
      <label htmlFor='name'>
        {label}
        {isRequired && <span className='text-Error'>*</span>}
      </label>
      <input
        className={classes}
        placeholder={placeholder}
        disabled={isDisabled}
        {...rest}
      />
      {<span className='absolute top-9 right-2'>{startIcon}</span>}

      {<span className='absolute top-9 left-2'>{endIcon}</span>}
      {error?.length && (
        <span className='mt-1 text-Error text-xs'>{error}</span>
      )}
    </div>
  );
}
