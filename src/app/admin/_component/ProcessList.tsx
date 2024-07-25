"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { useMutation } from "react-query";
// import { TableHeader } from "@r/models/tableHeader";
// import { resetPasswordApi, userList } from "@/services/axios/axiosApi's";
import Spinner from "@/components/shared/spinner";
import PartoTable from "@/components/shared/partoTable";
import { toast } from "react-toastify";
import TableFooterWithPagination from "@/components/shared/TableFooterWithPagination";
// import AddButton from "../../dashboard/user-management/_components/AddButton";
import userList from "./list.json"

export default function ProcessList() {
  const searchParam = useSearchParams();
  const [list, setList] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const resetUserPassword = useMutation(
  //   (command) => resetPasswordApi(command.userName),
  //   {
  //     onSuccess: async (response?: any, context?: any) => {
  //       if (response.status === 200) {
  //         toast.success("تغییر کلمه عبور با موفقیت انجام شد");
  //       } else {
  //         toast.error(response.data.message);
  //       }
  //     },
  //     onError: (error) => {
  //       toast.error("مشکل در برقراری ارتباط با سرور");
  //     },
  //   }
  // );
  const personHeader = [
    { sortable: true, title: "ردیف" },
    { sortable: false, title: "نام", orginalTitle: "name" },
    { sortable: false, title: "نام کاربری", orginalTitle: "userName" },
    { sortable: false, title: "موبایل", orginalTitle: "phoneNumber" },
    { sortable: false, title: "ایمیل", orginalTitle: "email" },
    {
      sortable: false,
      orginalTitle: "isActive",
      booleanValue: [
        { title: "فعال", type: true },
        { title: "غیرفعال", type: false },
      ],
      badge: [
        { title: "فعال", type: "active" },
        { title: "غیرفعال", type: "deactive" },
      ],
      title: "وضعیت",
    },
    {
      sortable: false,
      title: "کلمه عبور",
      action: [{ key: "password", action: () => {} }],
    },
    {
      sortable: false,
      title: "اقدام",
      action: [{ key: "edit", action: "users/addOrEditUser?id=" }],
    },
  ];

  const getUserList = async (
    page: string,
    size: string,
    name?: string,
    userName?: string,
    isActive?: boolean
  ) => {
    setIsLoading(true);
    try {
      const result = await userList;
      if (result.status === 200) {
        setList(result.data.content);
      }
    } catch (error) {
      setList([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserList(
      searchParam?.get("page")! ?? 1,
      searchParam?.get("pageSize")! ?? 5,
      searchParam?.get("name")!,
      searchParam?.get("userName")!,
      searchParam?.get("isActive")! === "true"
        ? true
        : searchParam?.get("isActive")! === "false"
          ? false
          : undefined
    );
  }, [searchParam]);

  return (
    // <Wrapper loading={resetUserPassword.isLoading}>
      <>
        {isLoading ? (
          <div className="w-full h-20 flex flex-col justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <section className="w-full bg-white rounded-[5px] shadow-cartable p-4 mt-4">
            {/* <SearchUser /> */}
            <hr />
            {/* <AddUserSection /> */}
            {/* <AddButton title={"فرآیند"} link={"/admin/createProcess"}/> */}
            {list?.data && list.data.length > 0 && (
              <>
                <PartoTable header={personHeader} body={list.data} />
                <TableFooterWithPagination data={list} />
              </>
            )}
          </section>
        )}
      </>
    // </Wrapper>
  );
}
