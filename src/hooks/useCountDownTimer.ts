import { useEffect, useState } from "react";

export default function useCountDownTimer(
    targetTimeSecond: number
    //in second
) {
    const [minute, setMinute] = useState<number>(
        Math.floor(targetTimeSecond / 60)
    );
    const [second, setsecond] = useState<number>(
        Math.floor(targetTimeSecond % 60)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("minute", minute, "s", second);
            if (second === 0 && minute > 0) {
                setsecond(59);
                setMinute((prev) => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        clearInterval(interval);
                        return 0;
                    }
                });
            } else if (second > 0) {
                setsecond((prev) => prev - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [second, minute]);

    return { minute, second };
}
