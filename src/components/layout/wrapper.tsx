'use Client'

import Spinner from "@/components/shared/spinner";
import { ReactNode } from "react"

type Props = {
    loading: boolean,
    children: ReactNode
}

export default function Wrapper({ loading, children }: Props) {
    return (
        <>
            {
                loading && <div className="fixed inset-0 z-30 bg-black bg-opacity-30 flex flex-col justify-center items-center">
                    <div className="h-32 w-32 rounded bg-white flex flex-col justify-center items-center">
                        <Spinner />
                    </div>
                </div>
            }
            {children}
        </>
    );
}