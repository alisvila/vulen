"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import SectionTitle from "@/components/shared/sectionTitle";
import {  TextInput } from "@/components/shared";
// import { addProcess } from "@/services/adminApi";


export default function CreateTransactions() {
  const [error, setError] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);

  const router = useRouter();
  const searchParam = useSearchParams();

  const validationSchema = Yup.object().shape({});

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
    // <Wrapper loading={false}>
      <section className="w-full bg-white rounded-[5px] shadow-cartable p-4 mt-4">
        <SectionTitle title='اطلاعات کاربر' />
        <div className="w-full">
          <form
            onSubmit={addProcessForm.handleSubmit}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {error !== "" ? (
              <span className="col-span-full text-Error text-xs">{error}</span>
            ) : null}
            <div className="col-span-1">
              <TextInput
                label={"نام"}
                placeholder='وارد کنید'
                type='text'
                {...addProcessForm.getFieldProps("name")}
                error={
                  addProcessForm.touched.name && addProcessForm.errors.name
                    ? addProcessForm.errors.name
                    : null
                }
                isRequired
              />
            </div>
            <div className="col-span-1">
              <TextInput
                label={"نام خانوادگی"}
                placeholder='وارد کنید'
                type='text'
                {...addProcessForm.getFieldProps("title")}
                error={
                  addProcessForm.touched.title && addProcessForm.errors.title
                    ? addProcessForm.errors.title
                    : null
                }
                isRequired
              />
            </div>
            <div className="col-span-1">
              <TextInput
                label={"نام کاربری"}
                placeholder='وارد کنید'
                isDisabled={searchParam?.has("id")!}
                type='text'
                {...addProcessForm.getFieldProps("version")}
                error={
                  addProcessForm.touched.version &&
                  addProcessForm.errors.version
                    ? addProcessForm.errors.version
                    : null
                }
                isRequired
              />
            </div>
          </form>
        </div>
      </section>
    // </Wrapper>
  );
}
