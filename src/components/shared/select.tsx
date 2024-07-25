import { useState, type SelectHTMLAttributes, useEffect } from "react";
// import classNames from "classnames";
import Image from "next/image";
import { json } from "stream/consumers";

interface SelectGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string | React.ReactNode;
  placeholder?: string;
  rootClassName?: string;
  className?: string;
  error?: string | any;
  isDisabled?: boolean;
  isRequired?: boolean;
  options?: any[];
  titleKey?: string;
  isMultiple?: boolean;
  hasSearchOption?: boolean,
  onChange?: any,
  firstItemIsValue?: boolean,
  defaultValue?: any,
  showOptInSelect?: boolean,
  onDeSelect?: (val?: any) => any
}
export function Select({
  label = "نام",
  placeholder = "وارد کنید",
  className,
  error,
  isDisabled = false,
  isRequired,
  titleKey,
  options = [],
  isMultiple = false,
  hasSearchOption = false,
  onChange,
  firstItemIsValue = true,
  defaultValue,
  showOptInSelect = true,
  onDeSelect,
  ...rest
}: SelectGroupProps) {
  // const classes = classNames(
  //   "select",
  //   { "pt-0": isMultiple },
  //   { "select-error": error },
  // );

  const classes = " select pt-0"
  const [showOpts, setShowOpts] = useState(false);
  const [search, setSearch] = useState("");
  const [selectVal, setSelectVal] = useState(firstItemIsValue ? [options[0]] : defaultValue || []);
  

  useEffect(() => {
    onChange(isMultiple ? selectVal : selectVal[0])
  }, [selectVal])

  return (
    <>
      <div
        className={`w-full flex flex-col p-0 relative max-h-max ${className}`}
      >
        <label htmlFor='name'>
          {label}
          {isRequired && <span className='text-Error'>*</span>}
        </label>
        <div
          className={classes}
          onClick={(event) => {
            event.stopPropagation()
            setShowOpts(!showOpts)
          }}
        // value={selectVal ? selectVal : search}
        >
          {selectVal && showOptInSelect && (
            <div className='w-full h-full'>
              {selectVal?.map((it?: any, index?: any) => (
                <div
                  key={`selected_Item_${it}_${index}`}
                  onClick={(e) => {
                    if (isMultiple) {
                      e.stopPropagation()
                    }
                  }}
                  className={`w-fit px-3 pt-2 ${isMultiple ? 'bg-Neutral-200 float-start py-1 px-3 m-1 rounded-4xl flex' : ''}`}
                >
                  {
                    isMultiple && (
                      <Image
                        src='/assets/img/close-circle.svg'
                        alt=''
                        width={18}
                        height={10}
                        className={"ml-2"}
                        onClick={(event) => {
                          event.stopPropagation();
                          const temp = [...selectVal];
                          temp.splice(index, 1);
                          setSelectVal(temp);
                          onDeSelect && onDeSelect(it)
                        }}
                      />
                    )}
                  {titleKey ? it[titleKey] : it}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={`absolute top-20 max-h-52 overflow-auto right-1 w-98% border border-Neutral-600
        bg-Neutral-200 rounded-b-md z-50 ${showOpts ? "block" : "hidden"}`}
          tabIndex={0}
          onBlur={() => {
            isMultiple && setShowOpts(false)
          }}
        >
          {
            hasSearchOption && (
              <input
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  e.stopPropagation()
                  setSearch(e.target.value)
                }}
                className='w-98% min-h-10 opacity-100 my-2 mr-1'
                placeholder='جستجو'
                value={search}
              />
            )
          }
          {options
            .filter((it) => {
              return titleKey
                ? `${it[titleKey]}`?.includes(search)
                : it?.includes(search);
            })
            .map((item, index) => {
              const findIndex = selectVal.findIndex((it?: any) => it.id === item.id);
              return (
                <div
                  className={`flex flex-row item-center cursor-pointer p-2 px-3 border-b-[1px] border-Neutral-300`}
                  key={`select_item_${index}`}
                  // value={index}
                  onClick={(event) => {
                    event.stopPropagation()
                    if (!isMultiple) {
                      setSelectVal([item]);
                      setShowOpts(false)
                    } else {
                      if (findIndex === -1) {
                        setSelectVal((prevState?: any) => [...prevState, item]);
                      } else {
                        const temp = [...selectVal];
                        temp.splice(findIndex, 1);
                        setSelectVal(temp);
                        onDeSelect && onDeSelect(item)
                      }
                    }
                  }}
                >
                  {
                    isMultiple && (
                      <div className={`w-5 h-5 flex justify-center items-center rounded-md ml-2 ${findIndex !== -1 ? "bg-Primary" : 'bg-white'}`}>
                        <Image
                          src='/assets/img/tick.svg'
                          alt='guide'
                          width={16}
                          height={16}
                        />
                      </div>
                    )
                  }
                  <span className="flex">
                    {titleKey ? item[titleKey] : item}
                  </span>
                </div>
              );
            })}
        </div>

        <Image
          src='/assets/img/downArrow.svg'
          alt=''
          width={12}
          height={10}
          tabIndex={0}
          className={`absolute left-3 top-11 z-0 duration-300 cursor-pointer ${showOpts && "rotate-180"}`}
          onClick={(event) => {
            event.stopPropagation()
            setShowOpts(!showOpts)
          }}
        // onBlur={() => {
        //   setShowOpts(false)
        // }}
        />
        {error?.length && (
          <span className='mt-1 text-Error text-xs'>{error}</span>
        )}
      </div>

      {
        showOpts && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-[transparent] z-40"
            onClick={() => {
              setShowOpts(false)
            }}
          />
        )
      }
    </>
  );
}
