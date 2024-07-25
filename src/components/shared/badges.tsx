// import classNames from "classnames";

type BadgeType = 'active' | 'deactive' | 'info' | 'during' | 'legal' | 'real';
type borderRadius = '24' | '4';
export default function Badge({
    title,
    type = 'info',
    radius = '4',
    className,
}: {
    title: string,
    type?: BadgeType,
    radius?: borderRadius,
    className?: string,
}) {
    // const classes = classNames(
    //     "badges",
    //     className,
    //     { [`badges-${type.toString()}`]: type },
    //     { "rounded-3xl": radius === '24' },
    //     { "rounded": radius === '4' },
    // );

    const classes = "badges rounded-3x1"

    return (
        <span className={classes}>
            {title}
        </span>
    );
}