import Image from "next/image";
import Delete from "./svgComponents/delete";
import Edit from "./svgComponents/edit";
import View from "./svgComponents/view";
import Archive from "./svgComponents/archive";
import ResetPassword from "@/components/shared/svgComponents/resetPassword";

type Color = 'primary' | 'secondary' | 'gray' | 'info';
type borderRadius = '24' | '4';
export function Button({ title = "ورود", color = 'primary', radius = '24', click, className, ...rest }: { title?: string | React.ReactNode, color?: Color, radius?: borderRadius, click?: () => void, className?: string, [rest: string]: any; }) {
    return (<button onClick={click} className={`h-11 flex flex-row items-center justify-center ${className} ${radius === '24' ? "rounded-3xl " : "rounded"} ${color === 'primary' ? "bg-Primary hover:bg-Secondary-2 text-white" : color === 'secondary' ? "bg-Secondary-3 hover:bg-[#D75A23] text-white" : color === 'gray' ? "bg-Neutral-600 hover:bg-Neutral-500 text-white" : "border border-Primary bg-Secondary text-Primary"}`}>{title}</button>);
}
export function SaveButton({ title = "ذخیره", color = 'primary', radius = '24', click, className, ...rest }: { title?: string, color?: Color, radius?: borderRadius, click?: () => void, className?: string, [rest: string]: any; }) {
    return (<button type="button" {...rest} onClick={click} className={`h-11 flex flex-row items-center justify-center rounded bg-Primary ${className} `}>
        <Image src="/assets/img/save.svg" alt="save" width={20} height={20} />
        <span className="font-IranSansMedium text-sm text-BackgroundColor2 mr-1">{title}</span>
    </button>);
}
export function AddButton({ title = "ذخیره", color = 'primary', radius = '24', click, className }: { title?: string, color?: Color, radius?: borderRadius, click?: any, className?: string }) {
    return (<button onClick={click} className={`h-11 flex flex-row items-center justify-center rounded bg-Primary ${className} `}>
        <span className="text-xl text-white">+</span>
        <span className="text-sm text-BackgroundColor2 mr-1">{title}</span>
    </button>);
}

export function CancelButton({ title, click, className, ...rest }: { title?: string, click?: () => void, className?: string, [rest: string]: any }) {
    return (<button onClick={click} {...rest} className={`h-11 flex flex-row items-center justify-center rounded text-Neutral-600 font-IranSansMedium text-sm border border-Neutral-600 ${className}`}>{title}</button>);
}

export function DeleteButton({ title, click, className }: { title?: string, click?: (data?: any) => void, className?: string }) {
    return (<button onClick={click} className="p-2"><Delete /></button>);
}

export function EditButton({ title, click, className }: { title?: string, click?: (data?: any) => void, className?: string }) {
    return (<button onClick={click} className="p-2"><Edit /></button>);
}

export function ViewButton({ title, click, className }: { title?: string, click?: () => void, className?: string }) {
    return (<button onClick={click} className="p-2 flex flex-row items-center bg-Primary rounded w-20 h-8 text-white"><span className="mr-1">{title}</span><View size="30" /></button>);
}

export function ArchiveButton({ title, click, className }: { title?: string, click?: () => void, className?: string }) {
    return (<button onClick={click} className="p-2"><Archive /></button>);
}
export function ReserPasswordButton({ title, click, className }: { title?: string, click?: () => void, className?: string }) {
    return (<button onClick={click} className="p-2 flex flex-row"><span className="mr-1 text-Primary underline">{title}</span><ResetPassword /></button>);
}