import { Fragment, useState } from "react";

import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const categoriesToDisplay = [];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  // mobile menu

  const mobileMenuClick = () => {
    setClick(!click);
  };

  const mobileMenuClick1 = () => {
    setClick1(!click1);
  };

  const mobileMenuClick2 = () => {
    setClick2(!click2);
  };

  const mobileMenuClick3 = () => {
    setClick3(!click3);
  };

  const mobileMenuClick4 = () => {
    setClick4(!click4);
  };

  const mobileMenuClick5 = () => {
    setClick5(!click5);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* mobile category menu links */}
                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {categoriesToDisplay?.length <= 0 ? (
                    <>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigate("/");
                        }}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Home
                      </button>
                      <div className="relative mt-6 ">
                        <button
                          onClick={mobileMenuClick}
                          id="dropdownDelayButton"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          type="button"
                        >
                          IB DP
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {click && (
                          <div
                            id="dropdownDelay"
                            className="  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white   px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Physics
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Biology
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Math AA
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Math AI
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Chemistry
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Geography
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setMobileMenuOpen(false);
                                    setClick(!click);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  History
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="relative mt-6">
                        <button
                          id="dropdownDelayButton"
                          onClick={mobileMenuClick1}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          type="button"
                        >
                          AP
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {click1 && (
                          <div
                            id="dropdownDelay"
                            className="  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Physics 1
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Physics 2
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Physics C EM
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Physics C Mechanics
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Biology
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Chemistry
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Calculus AB
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick1(!click1);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  AP Calculus BC
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="relative mt-6">
                        <button
                          onClick={mobileMenuClick2}
                          id="dropdownDelayButton"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          type="button"
                        >
                          A Level
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {click2 && (
                          <div
                            id="dropdownDelay"
                            className="  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick2(!click2);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  A Level Math (9709)
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick2(!click2);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  A Level Bio (9700)
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="relative mt-6">
                        <button
                          onClick={mobileMenuClick3}
                          id="dropdownDelayButton"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          type="button"
                        >
                          iGCSE
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {click3 && (
                          <div
                            id="dropdownDelay"
                            className="  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick3(!click3);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  iGCSE Physics (0625)
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick3(!click3);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  iGCSE Biology (0610)
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="relative mt-6">
                        <button
                          onClick={mobileMenuClick4}
                          id="dropdownDelayButton"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          type="button"
                        >
                          SAT
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {click4 && (
                          <div
                            id="dropdownDelay"
                            className="  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick4(!click4);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  SAT New Math
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick4(!click4);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  SAT English
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="relative mt-6">
                        <button
                          onClick={mobileMenuClick5}
                          id="dropdownDelayButton"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          type="button"
                        >
                          KS 1-4
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {click5 && (
                          <div
                            id="dropdownDelay"
                            className="z  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick5(!click5);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Year 2
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick5(!click5);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Year 3
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    navigate("/course");
                                    setClick5(!click5);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block min-w-full text-start  text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Year 4
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigate("/login");
                        }}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Join/Login
                      </button>
                    </>
                  ) : (
                    categoriesToDisplay?.map((category) => {
                      return (
                        <>
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                            key={category?._id}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {category?.name}
                          </button>
                        </>
                      );
                    })
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Deskto Navigation */}
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden h-full lg:flex">
                    {/*  menus links desktop*/}
                    <Popover.Group className="ml-8">
                      <div className="flex h-full min-w-full  justify-center space-x-10">
                        {categoriesToDisplay?.length <= 0 ? (
                          <>
                            <Link
                              to="/"
                              className="flex items-center text-xl font-bold text-gray-700 hover:text-gray-800"
                            >
                              IITian Academy | eLearning App By IITian
                            </Link>
                            <Link
                              to="/"
                              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                            >
                              Home
                            </Link>

                            <div
                              className="relative mt-6 "
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              <button
                                id="dropdownDelayButton"
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                type="button"
                              >
                                IB DP
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                              </button>

                              {isHovered && (
                                <div
                                  id="dropdownDelay"
                                  className="z-10  absolute  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Physics
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Biology
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Math AA
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Math AI
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Chemistry
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Geography
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        History
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div
                              className="relative mt-6"
                              onMouseEnter={handleMouseEnter1}
                              onMouseLeave={handleMouseLeave1}
                            >
                              <button
                                id="dropdownDelayButton"
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                type="button"
                              >
                                AP
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                              </button>

                              {isHovered1 && (
                                <div
                                  id="dropdownDelay"
                                  className="z-10  absolute  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Physics 1
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Physics 2
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Physics C EM
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Physics C Mechanics
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Biology
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Chemistry
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Calculus AB
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave1();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        AP Calculus BC
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div
                              className="relative mt-6"
                              onMouseEnter={handleMouseEnter2}
                              onMouseLeave={handleMouseLeave2}
                            >
                              <button
                                id="dropdownDelayButton"
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                type="button"
                              >
                                A Level
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                              </button>

                              {isHovered2 && (
                                <div
                                  id="dropdownDelay"
                                  className="z-10  absolute  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave2();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        A Level Math (9709)
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave2();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        A Level Bio (9700)
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div
                              className="relative mt-6"
                              onMouseEnter={handleMouseEnter3}
                              onMouseLeave={handleMouseLeave3}
                            >
                              <button
                                id="dropdownDelayButton"
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                type="button"
                              >
                                iGCSE
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                              </button>

                              {isHovered3 && (
                                <div
                                  id="dropdownDelay"
                                  className="z-10  absolute  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave3();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        iGCSE Physics (0625)
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave3();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        iGCSE Biology (0610)
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div
                              className="relative mt-6"
                              onMouseEnter={handleMouseEnter4}
                              onMouseLeave={handleMouseLeave4}
                            >
                              <button
                                id="dropdownDelayButton"
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                type="button"
                              >
                                SAT
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                              </button>

                              {isHovered4 && (
                                <div
                                  id="dropdownDelay"
                                  className="z-10  absolute  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave4();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        SAT New Math
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave4();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        SAT English
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div
                              className="relative mt-6"
                              onMouseEnter={handleMouseEnter5}
                              onMouseLeave={handleMouseLeave5}
                            >
                              <button
                                id="dropdownDelayButton"
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                type="button"
                              >
                                KS 1-4
                                <svg
                                  className="w-2.5 h-2.5 ms-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                              </button>

                              {isHovered5 && (
                                <div
                                  id="dropdownDelay"
                                  className="z-10  absolute  bg-sky-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave5();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Year 2
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave5();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Year 3
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() => {
                                          handleMouseLeave5();
                                          navigate("/course");
                                        }}
                                        className="block min-w-full text-start text-white  px-4 py-2 hover:bg-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Year 4
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <Link
                              to="/login"
                              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                            >
                              Join/Login
                            </Link>
                          </>
                        ) : (
                          categoriesToDisplay?.map((category) => {
                            return (
                              <>
                                <Link
                                  key={category?._id}
                                  to={`/products-filters?category=${category?.name}`}
                                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {category?.name}
                                </Link>
                              </>
                            );
                          })
                        )}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile Naviagtion */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <Link
                      to="/"
                      className="flex items-center text-l font-medium text-gray-700 hover:text-gray-800"
                    >
                      IITian Academy | eLearning App By IITian
                    </Link>
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-600"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
