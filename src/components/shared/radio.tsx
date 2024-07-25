// import classNames from "classnames";

export type itemsType = { label: string; id: string|number }[];
export function Radio({
    items = [
        { label: "اول", id: "a" },
        { label: "دوم", id: "b" },
    ],
    title = "عنوان رادیو",
    className,
    isRow,
    value,
    //checked,
    defaultChecked,
    ...rest
}: {
    items?: itemsType;
    title?: string | React.ReactNode;
    className?: string;
    isRow?: boolean;
    value:string|number,
    //checked:string|number,
    defaultChecked?: string|number
    [rest: string]: any;
}) {
    const classesItem = "radioItem";

    return (
        <div className={`flex flex-col ${className}`}>
            {
                title && (
                    <span className="mb-2">{title}</span>
                )
            }
            <div className="flex flex-row gap-4">
                {items?.map(({ label, id }) => (
                    <div className="flex min-h-[1.5rem] items-center">
                        <input
                            className={classesItem}
                            type='radio'
                            name='flexRadioDefault'
                            id={`radio_Key_id_${id.toString()}`}
                            value={id}
                            defaultChecked={defaultChecked === id}
                           //checked={checked === id}
                            {...rest}
                        />
                        <label className="hover:cursor-pointer mr-2" htmlFor={id.toString()}>
                            {label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
