import { stepItem } from "./type";

type Iprops = {
    data: stepItem;
    currentStep: number;
    componentStep: number;
    totalStep: number;
};
const StepTitle = ({ data, currentStep, componentStep, totalStep }: Iprops) => {
    return (
        <div
            className={`flex flex-col justify-start items-center min-w-20 w-full relative 
                ${componentStep !== totalStep? "before:absolute before:top-5 before:right-1/2 before:h-px before:w-full before:border-t before:border-solid before:border-gray-primary/50" : ""} 
                ${currentStep === componentStep && " before:border-dashed before:border-secondary-3"}
                ${currentStep > componentStep && " before:border-solid before:border-primary"}
                `}
        >
            <span
                className={`${
                    currentStep === componentStep
                        ? "border-secondary-3 bg-secondary-3" 
                        : currentStep > componentStep ? "border-primary bg-primary" 
                        : "border-gray-primary bg-white"
                } " flex justify-center items-center rounded-full
                w-10 h-10 border border-solid relative z-0"`}
            >
                {currentStep >= componentStep ? data.icon : componentStep}
            </span>
            <span className='text-center mt-2'>{data.title}</span>
        </div>
    );
};
export default StepTitle;
