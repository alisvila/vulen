"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import SectionTitle from "@/components/shared/sectionTitle";
import Wrapper from "@/components/layout/wrapper";
// import { addProcess } from "@/services/adminApi";
import HorizontalSteps from "@/components/shared/wizard/Horizontal";
import PenIcon from "@/components/shared/svgComponents/PenIcon";
import CreateProsess from "./CreateProsess";
import CreateSteps from "./CreateSteps";
import CreateTransactions from "./CreateTransactions";
import CustomButton from "@/components/shared/CustomButton";

export default function baseWizard() {
  const [error, setError] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);

  const router = useRouter();
  const searchParam = useSearchParams();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    title: Yup.string().required()
  });

  const addProcessForm = useFormik({
    initialValues: {
      name: "",
      title: "",
      version: "",
    },

    onSubmit: async (values, {}) => {
      setError("");
      try {
        const editUserData = {
          name: values.name.trim(),
          title: values.title.trim(),
          version: values.version.trim(),
        };

        // const createProcess = await addProcess(editUserData);
      } catch (error) {
        setError(JSON.parse(JSON.stringify(error)).data.message);
      }
    },
    validationSchema: validationSchema,
  });

  return (
    <Wrapper loading={false}>
      <section className="w-full bg-white rounded-[5px] shadow-cartable p-4 mt-4">
        <SectionTitle title='اطلاعات کاربر' />
        <div className="bg-white p-5 pt-24 mb-7">
          <HorizontalSteps
            steps={[
              {
                title: "مشخصات پایه",
                content: <CreateProsess />,
                icon: <PenIcon />,
              },
              {
                title: "مشخصات پایه",
                content: <CreateSteps />,
                icon: <PenIcon />,
              },
              {
                title: "مشخصات پایه",
                content: <CreateTransactions />,
                icon: <PenIcon />,
              },
              {
                title: "ارکان و مدیران سرمایه گذاری",
                content: <h1>ارکان و مدیران سرمایه گذاری</h1>,
                icon: <PenIcon />,
              },
            ]}
            currentStep={currentStep}
            className={"text-Secondary-2"}
          />
          <div className="w-full flex flex-row items-center mt-4 justify-between">

            <CustomButton
            extraClass={currentStep === 1 ? "opacity-0" : ""}
              primary
              onClick={() => {
                setCurrentStep(currentStep - 1);
              }}
              className="bg-black"
            >
              مرحله ی قبل
            </CustomButton>
            <CustomButton
              primary
              onClick={() => {
                setCurrentStep(currentStep + 1);
              }}
              className="bg-primary"
            >
              مرحله ی بعد
            </CustomButton>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
