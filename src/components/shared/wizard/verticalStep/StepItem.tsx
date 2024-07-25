import { stepItem } from "./type";
type IProps = {
    data: stepItem;
    componentStepNumber: number;
    currentStep: number;
    stepsLength:number
};
const StepItem = ({ data, componentStepNumber, currentStep ,stepsLength}: IProps) => {
    return (
        <div className='pr-5'>
            <div
                className={`${componentStepNumber !==1 ? "before:absolute before:bottom-1/2 before:right-0 before:w-px before:h-1/2 before:bg-gray-primary/50" :""} ${componentStepNumber !==stepsLength ?"after:absolute after:top-1/2 after:right-0 after:w-px after:h-1/2 after:bg-gray-primary/50" :""} flex gap-11 items-center relative`}
            >
                <div className='relative'>
                    <div
                        className={`${
                            currentStep >= componentStepNumber
                                ? "border-primary text-primary"
                                : "text-gray-primary/50 border-gray-primary/50"
                        } ${
                            currentStep > componentStepNumber
                                ? "bg-primary"
                                : "bg-white"
                        } flex justify-center
                        items-center absolute top-0 -right-5 w-10 h-10 rounded-full border-2
                        border-solid z-10`}
                    >
                        {currentStep > componentStepNumber ? (
                            <></>
                            // <Image src={""} alt='check-icon' />
                        ) : currentStep === componentStepNumber ? (
                            <span className='bg-primary w-4 h-4 rounded-full'></span>
                        ) : (
                            componentStepNumber
                        )}
                    </div>
                    <span
                        className={`${
                            currentStep >= componentStepNumber
                                ? "border-primary text-primary"
                                : "text-gray-primary/50 border-gray-primary/50"
                        } flex justify-center items-center
                        min-w-40 h-10 text-xs font-medium border-solid border rounded`}
                    >
                        {data.title}
                    </span>
                    {currentStep >= componentStepNumber && (
                        <div className='w-5 h-full absolute left-1 top-0 flex justify-center items-center'>
                            {/* <Image
                                src={""}
                                alt='polygon'
                                className='absolute start-[98%]'
                            /> */}
                        </div>
                    )}
                </div>
                <div
                    className={`${
                        currentStep >= componentStepNumber
                            ? "border-primary"
                            : "text-gray-primary/50 border-gray-primary/50 opacity-90"
                    } w-full border-b`}
                >
                    {data.content}
                </div>
            </div>
        </div>
    );
};
export default StepItem;
