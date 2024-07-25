import StepTitle from "./stepTitle";
import { stepItem } from "./type";
// import polygonIcon from "@/public/assets/images/icons/polygon.jpg";
type IProps = {
    steps: stepItem[];
    currentStep: number;
    className: string
};
const HorizontalSteps = ({ steps, currentStep, className }: IProps) => {
    return (
        <div>
            <div className={`flex justify-around flex-grow-1 flex-shrink-1 basis-0 overflow-x-auto ${className}`}>
                {steps.map((item, index: number) => {
                    return (
                        <StepTitle
                            key={index}
                            data={item}
                            componentStep={index + 1}
                            currentStep={currentStep}
                            totalStep={steps.length}
                        />
                    );
                })}
            </div>
            <div className='mt-8 border border-dashed border-secondary-3 p-6 rounded-lg relative'>
                <div className='w-full absolute -top-3 right-0'>
                    <div className='relative flex justify-around flex-grow-1 flex-shrink-1 basis-0 overflow-x-auto'>
                        {steps.map((_, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className='min-w-20 w-full text-center'
                                >
                                    {index + 1 === currentStep && (
                                        
                                        <></>
                                            // <Image
                                            //     src={polygonIcon}
                                            //     alt=''
                                            //     className=' mx-auto w-4 h-auto -mt-0.5'
                                            // />
                                        
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {steps[currentStep - 1].content}
            </div>
        </div>
    );
};
export default HorizontalSteps;
