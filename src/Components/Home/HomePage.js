import { Link, useNavigate } from "react-router-dom";

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
const products = [
  {
    name: "IB DP HL & SL",
    description:
      "Physics, Biology & Chemistry - including 2025, MMA, MMI, Geography , History, BA, CS",
    title1: "Practice Questions and Notes",
    skills: "200K skills",
    skills1: "100 skills",
  },
  {
    name: "IB MYP",
    description: "Physics, Biology, Chemistry, Standard Math",
    title1: "Practice Questions",
    skills: "10K skills",
    skills1: "0 skills",
  },
  {
    name: "Advance Placement",
    description:
      "Physics 1, Physics 2, Physics C:Mechanics, Physics C:EM, Biology, Chemistry , Calc AB, Calc BC",
    title1: "Practice Questions",
    skills: "10K skills",
    skills1: "20 skills",
  },
  {
    name: "CIE As & A Level",
    description:
      "Mathematics (9709), Biology (9700), Chemistry (9701), Physics (9702)",
    title1: "Practice Questions and Notes",
    skills: "200K skills",
    skills1: "100 skills",
  },
  {
    name: "iGCSE",
    description:
      "Physics(0625), Biology(0610),Chemistry(0620), Mathematics (0580)",
    title1: "Practice Questions",
    skills: "10K skills",
    skills1: "5 skills",
  },
  {
    name: "SAT Math & English",
    description: "SAT New Maths, SAT Reading, Writing and Language",
    title1: "Practice Questions",
    skills: "10K skills",
    skills1: "20 skills",
  },
  {
    name: "National Curriculum",
    description: "Year 2 , Year 3 , Year 4 , Year 5 , Year 6 , Year 7 , Year 8",
    title1: "Practice Questions and Notes",
    skills: "20K skills",
    skills1: "100 skills",
  },
];
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <main>
        <div className="relative overflow-hidden">
          {/* Sale */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                Learn From Subject Experts
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                IB Physics, Chem, Math, Geo, History, AP, Physics, Math, Chem,
                Bio, A-Level, iGCSE, IIT JEE/NEET...
              </p>
              <Link
                to="/course"
                className="mt-9 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >
                View Courses
              </Link>
              <p className="mx-auto mt-6 max-w-xl text-xl text-gray-600">
                "I have not failed. i've just found 10,000 ways that won't
                work." - Thomas Alva Edison (1847-1931)
              </p>
            </div>
          </section>

          <div className="mb-9 w-full p-4 text-center bg-white  rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <Link
                href="#"
                className="sm:transition   sm:duration-300 sm:delay-150 sm:hover:transform sm:hover:scale-110 w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
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
                className="sm:transition   sm:duration-300 sm:delay-150 sm:hover:transform sm:hover:scale-110 w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
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
        </div>
      </main>
      <main>
        <div className=" mb-9 mt-9 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
          {products?.map((product) => (
            <>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <div className="relative bg-gray-100">
                  <div className="px-6 pb-6 mt-8">
                    <div className="flex flex-col">
                      <div>
                        <h3 className="mb-3 text-xl font-bold font-heading">
                          {product?.name}
                        </h3>
                      </div>

                      <div>
                        <p className=" mb-5 font-medium font-heading hover:underline">
                          <Link to="/course">{product?.description}</Link>
                        </p>
                      </div>
                      <div className="flex justify-between mb-6  ">
                        <p className="hover:underline">
                          <Link to="/course">{product?.title1}</Link>
                        </p>
                        <p className="hover:underline">
                          <Link to="/course">{product?.skills}</Link>
                        </p>
                      </div>
                      <div className="flex justify-between  ">
                        <p className="hover:underline">
                          <Link to="/course">Mock Tests</Link>
                        </p>
                        <p className="hover:underline">
                          <Link to="/course">{product?.skills1}</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div>
          <ul className="ml-8 mb-9">
            <li className="text-blue-700 hover:underline">
              <Link to="/course">
                IBDP Physics SL&HL:IB Style Question Bank
              </Link>
            </li>
            <li className="text-blue-700 hover:underline">
              <Link to="/course">IBDP Biology SL&HL Style Question Bank</Link>
            </li>
            <li className="text-blue-700 hover:underline">
              <Link to="/course">
                {" "}
                IBDP Chemistry SL&HL:IB Style Question Bank
              </Link>
            </li>
            <li className="text-blue-700 hover:underline">
              <Link to="/course">IBDP Maths AA&AI:IB Style Question Bank</Link>
            </li>
          </ul>
        </div>
        <div className="mb-9">
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 className="text-xl font-medium tracking-tight text-gray-700 sm:text-4xl lg:text-4xl">
                IB DP Physics, Chemistry, Maths and Biology
              </h2>
            </div>
          </section>
        </div>

        <button
          onClick={() => navigate("/course")}
          className="w-80 ml-3  bg-blue-700 hover:bg-blue-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Need Help? - Book A Teacher Online
        </button>

        <main>
          <div className="relative overflow-hidden">
            {/* Sale */}
            <section
              aria-labelledby="sale-heading"
              className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2
                  id="sale-heading"
                  className="text-xl font-medium tracking-tight text-gray-700 sm:text-5xl lg:text-6xl"
                >
                  Our Most Popular Courses
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                  Get access to comprehensive study material, detail explanation
                  and lots of practice papers
                </p>
                <Link
                  to="/course"
                  className="mt-9 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Popular Courses
                </Link>
              </div>
            </section>
          </div>
        </main>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                What Our Students Have to Say
              </h2>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-200 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Peter</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    From San Jose, USA
                  </span>
                  <p className="mt-3 mb-4 font-medium text-gray-500 dark:text-gray-400">
                    iitianacademy helped me clear my doubts in science &
                    mathematics. The iitianacademy faculty is very good.
                    Studying on this app is super fun and this has helped me
                    perform better in my exams. Thank You iitianacademy !!!
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-200 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Ayse O</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    From Switzerland
                  </span>
                  <p className="mt-3 mb-4 font-medium text-gray-500 dark:text-gray-400">
                    The learning Materials designed by iitianacademy is a huge
                    boon to Students like us . It is like having a teacher with
                    you 24/7. The app is very informative and the quality of the
                    teachers are very good.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-200 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Ji Shen</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    From Canada
                  </span>
                  <p className="mt-3 mb-4 font-medium text-gray-500 dark:text-gray-400">
                    iitianacademy has been an excellent experience for me. The
                    teachers at iitianacademy has always given me the confidence
                    to achieve my goals. Their unique style of teaching and
                    explaining the subjects make every concept simple and easy.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-200 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Gale</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    From London, UK
                  </span>
                  <p className="mt-3 mb-4 font-medium text-gray-500 dark:text-gray-400">
                    I have been using the learning app for a long period of time
                    now. The concepts,illustrations and overall explanations are
                    very detailed and second to none. The app has helped me nail
                    the basics to perfection. It is just perfect for us and I
                    just can't stop loving this app !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </main>
    </div>
  );
}
