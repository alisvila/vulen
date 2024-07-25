import { ButtonHTMLAttributes } from "react";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    extraClass?: string;
    block?: boolean;
    primary?: boolean;
}

export default function CustomButton({ ...props }: CustomButton) {
    const { children, extraClass= "", block, primary, ...rest } = props;

    return (
        
        <button
            {...rest}
            className={`w-36 h-10 rounded cursor-pointer py-1 px-4  ${extraClass} ${primary && "bg-Primary text-white"} 
            ${rest.disabled && "!bg-gray-secondry text-white !cursor-not-allowed"}
            ${block ?? (block && "w-full")}`} 
        >
            {children}
        </button>
    );
}
