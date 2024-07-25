'use client'
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams,useRouter, usePathname} from 'next/navigation'
import { UserFilter } from "@r/models/userFilterModel";
import { Button, CancelButton } from "@/components/shared/button";

export default function SearchUser({}:{}) {
    const searchParams = useSearchParams();
    const pathName =usePathname()
    const router= useRouter();
    const [show, setShow] = useState<boolean>(false);
    const userFilter = useFormik({
        initialValues: { name: '', userName: '', isActive: '' },
        onSubmit: async (values: UserFilter, { resetForm }) => {
            let query: string = ''
                if(values.name === '' && values.userName === '' && values.isActive === ''){
                    return null
                }else{
                    // ASK: what are thooose
                    query = "?";
                    if (values.name !== "") {
                        query =query+ "name=" + values.name + (values.userName !== '' || values.isActive !== '' ? "&" :"");
                    }
                    if (values.userName) {
                        query =query+ "userName=" + values.userName + (values.isActive !== '' ? "&" :"");
                    }
                    if (values.isActive) {
                        query =query+ "isActive=" + values.isActive;
                    }
                }
            
            router.push(query)
        },
    });
    const changeUserStatusHandler = (input: string) => {
        userFilter.setFieldValue('isActive',input)
    }
    const removeFilterHandler=()=>{
        userFilter.resetForm()
        router.push(pathName?.toString()!)
    }
    useEffect(() => {
        if (searchParams?.has('name')) {
            userFilter.setFieldValue('name',searchParams.get('name')!) ;
        }
        if (searchParams?.has('userName')) {
            userFilter.setFieldValue('userName',searchParams.get('userName')!) ;
        }
        if (searchParams?.has('isActive')) {
            userFilter.setFieldValue('isActive',searchParams.get('isActive')!) ;
        }
    }, [searchParams])
    return (
        <section className="w-full flex flex-col">
            <div onClick={() => setShow(!show)} className="w-full flex flex-row items-center justify-between cursor-pointer">
                <div className="text-sm text-Primary font-IranSansMedium px-2 border-r-2 border-Primary mb-4 flex flex-row items-center">
                    <Image src="/assets/img/search.svg" alt="search" width={16} height={16} />
                    <span className="font-IranSansMedium text-sm mr-1">جستجو</span>
                </div>
                <Image src="/assets/img/downArrow.svg" alt="down arrow" width={16} height={10} />
            </div>
            <div className={`w-full  overflow-hidden transition-all duration-200 ${show === true ? "h-112 md:h-64 lg:h-60" : "h-0"}`}>
                <form onSubmit={userFilter.handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-1">
                    <div className="col-span-1">
                        <label htmlFor="name">نام</label>
                        <input
                            className={`w-full mt-3 h-10`}
                            type="text"
                            id="name"
                            placeholder="وارد کنید"
                            {...userFilter.getFieldProps("name")}
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="userName">نام کاربری</label>
                        <input
                            className={`w-full mt-3 h-10`}
                            type="text"
                            id="userName"
                            placeholder="وارد کنید"
                            {...userFilter.getFieldProps("userName")}
                        />
                    </div>
                    <div className="col-span-1 flex flex-col justify-end">
                        <label htmlFor="isActive">وضعیت</label>
                        <select
                            className={`w-full border border-Neutral-500 h-10 mt-3 rounded`}
                            id="isActive"
                            {...userFilter.getFieldProps("isActive")}
                            onChange={(event: any) =>
                                changeUserStatusHandler(event.target.value)
                            }
                        >
                            <option value="" defaultValue={""}>
                                انتخاب کنید
                            </option>
                            <option value={'true'}>
                                فعال
                            </option>
                            <option value={'false'}>
                                غیرفعال
                            </option>
                        </select>
                    </div>
                    {/* <div className="col-span-1 flex flex-col justify-end">
                        <label htmlFor="position">سمت</label>
                        <select
                            className={`w-full border border-Neutral-500 h-10 mt-3 rounded`}
                            id="position"
                        >
                            <option>
                                انتخاب کنید
                            </option>
                            <option>
                                کارشناس ثبت کننده
                            </option>
                            <option>
                                کارشناس مسئول ثبت کننده
                            </option>
                            <option>
                                رئیس اداره ثبت کننده
                            </option>
                            <option>
                                کارشناس اداره تخلفات
                            </option>
                            <option>
                                کارشناس مسئول اداره تخلفات
                            </option>
                            <option>
                                رئیس اداره تخلفات
                            </option>
                            <option>
                                مدیر اداره تخلفات
                            </option>
                            <option>
                                مدیر ثبت کننده
                            </option>
                        </select>
                    </div> */}
                    <div className="col-span-full flex flex-row-reverse items-center justify-start">
                        <Button title={"فیلتر"} radius="4" className="w-28 mr-2" />
                        <CancelButton click={removeFilterHandler} title="حذف فیلتر" className="w-28" />
                    </div>
                </form>
            </div>
        </section>
    );
}