import { stepItem } from "./type";
import StepItem from "./StepItem";
type IProps = {
    steps: stepItem[];
    currentStep: number;
};
const VerticalSteps = ({ steps, currentStep }: IProps) => {
    return (
        <div className='stepWrapper'>
            {steps.map((item, index) => {
                return (
                    <StepItem
                        key={item.title + index}
                        data={item}
                        componentStepNumber={index + 1}
                        currentStep={currentStep}
                        stepsLength={steps.length}
                    />
                );
            })}
        </div>
    );
};
export default VerticalSteps;
