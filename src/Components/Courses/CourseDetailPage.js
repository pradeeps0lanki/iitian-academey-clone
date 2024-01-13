import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";

const perks = [
  {
    name: "IBDP Physics SL & HL",

    description: "Study guide and Notes",
    description1: "IB Style Question Banks With Solution",
  },
  {
    name: "IBDP Biology SL & HL",

    description: "Study guide and Notes",
    description1: "IB Style Question Banks With Solution",
  },
  {
    name: "IBDP Maths AA HL",

    description: "IB Style HL Paper 1",
    description1: "IB Style HL Paper 2",
    description2: "IB Style HL Paper 3",
  },
  {
    name: "IBDP Maths AA SL",

    description: "IB Style HL Paper 1",
    description1: "IB Style HL Paper 2",
  },
  {
    name: "Download Apps",
    description: "Download on the App Store",
    description1: "Download on the Google Play Store",
  },
];

const CourseDetailPage = () => {
  let colors = [
    { name: "IB Style Question Bank With Solution" },
    { name: "Study Guide and Notes" },
    { name: "IB Physics HL Past Papers" },
    { name: "IB Physics SL Past Papers" },
  ];
  return (
    <div className="mt-9">
      <button className="w-80 ml-3    bg-blue-700 hover:bg-blue-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Need Help? - Book A Teacher Online
      </button>
      <div className="mb-9 w-full p-4 text-center bg-white  rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <Link
            href="#"
            className=" transition   duration-300 delay-150 hover:transform hover:scale-110 w-full sm:w-auto bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="me-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Download on the</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Mac App Store
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="transition   duration-300 delay-150 hover:transform hover:scale-110 w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="me-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Get in on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center mb-7 font-bold text-3xl">
        <h2 className="underline text-green-500">IBDP</h2>
      </div>

      <div className="grid grid-cols-1  gap-x-8 gap-y-10 lg:grid-cols-3">
        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>
      </div>

      <div className="text-center mb-7 font-bold text-3xl">
        <h2 className="underline text-orange-400">
          IB Middle Years Programme (IB MYP)
        </h2>
      </div>

      <div className="grid grid-cols-1  gap-x-8 gap-y-10 lg:grid-cols-3">
        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>
      </div>

      <div className="text-center mb-7 font-bold text-3xl">
        <h2 className="underline text-blue-700">Advanced Placement (AP)</h2>
      </div>

      <div className="grid grid-cols-1  gap-x-8 gap-y-10 lg:grid-cols-3">
        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>
      </div>

      <div className="text-center p-7 mb-7 font-bold text-3xl bg-blue-700">
        <h2 className="underline text-white">CIE As & A Level</h2>
      </div>

      <div className="grid grid-cols-1  gap-x-8 gap-y-10 lg:grid-cols-3">
        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>

          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>

        <form className=" lg:block">
          <h3 className="sr-only">Categories</h3>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            key="disclosure"
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      IBDP Physics SL & HL -Last 2024
                    </span>

                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup>
                      <div className="flex items-start  flex-col flex-wrap">
                        <span className="font-medium text-gray-900 mb-2">
                          IBDP Physics SL & HL
                        </span>
                        {colors?.map((color) => (
                          <RadioGroup.Option
                            key={color?.id}
                            value={color}
                            className=" relative  rounded-full flex  flex-col items-center justify-center cursor-pointer focus:outline-none m-2"
                          >
                            <p className="hover:underline text-blue-700">
                              {color?.name}
                            </p>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </form>
      </div>

      {/* info */}
      <section
        aria-labelledby="perks-heading"
        className="border-t border-gray-200 bg-sky-600"
      >
        <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="">
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-base font-medium text-white">
                    {perk.name}
                  </h3>
                  <h3 className="mt-3 hover:underline text-sm text-white">
                    <Link to="/course">{perk.description}</Link>
                  </h3>
                  <h3 className="mt-3 hover:underline text-sm text-white">
                    <Link to="/course">{perk.description1}</Link>
                  </h3>
                  <h3 className="mt-3 hover:underline text-sm text-white">
                    <Link to="/course">{perk.description2}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
