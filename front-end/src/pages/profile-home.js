import React from "react";

import Profile1 from "../assets/images/Profile1.jpg";

const ProfileAdminHome = () => {
  return (
    <div>
      <div className="review bg-gray-200">
        <img src={Profile1} alt="" className="fixed h-auto w-full bg-opacity-75" />
      </div>

      <div className="fixed left-60 top-0   h-full w-full flex  items-center">
        <h1 className="text-5xl text-white font-serif mb-[250px]">
          Welcome to Flavor Feed
        </h1>

        {/* <div className="absolute left-80 top-0   h-full w-full   bg-sky-200 "> */}

        <div className="f1">
          {/* <section className="bg-gray-800 dark:bg-gray-900 opacity-75"> */}
          <div className="absolute top-0  flex-col items-center justify-center -mr-16 -mt-5 px-32 py-8 ">
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="w-[400px] bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 opacity-90">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign Up
                </h1>
                <form className="space-y-4 md:space-y-6" autocomplete="off">
                  <div>
                    <label
                      for="percentage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Full Name"
                      onChange={(e) => e.target.value}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="percentage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="x@gmail.com"
                      onChange={(e) => e.target.value}
                      required
                    />
                  </div>

                  {/* <div className="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="confirm-password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Upload Promotion Image
                                            </label>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="confirm-password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-600"
                                            > */}
                  {/* {isErr} */}
                  {/* </label>
                                        </div>
                                    </div> */}
                  {/* image */}
                  {/* <div>
                                        <div>
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                id="default_size"
                                                type="file"
                                                name="image"
                                                // onChange={(e) => {
                                                //     setImgurl(e.target.files[0]);
                                                // }}
                                                required
                                            />
                                        </div>
                                    </div> */}

                  <div>
                    <label
                      for="percentage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Phone"
                      onChange={(e) => e.target.value}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="percentage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Create Password
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                      onChange={(e) => e.target.value}
                      required
                    />
                  </div>

                  {/* <div>
                                        <label for="percentage"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date and End date</label>
                                        <div date-rangepicker="" className="flex items-center">

                                            <div className="relative">
                                                <div
                                                    className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <input name="start" type="date"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                                                    placeholder="Select date start"
                                                    onChange={(e) => (e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <span className="mx-4 text-gray-500">to</span>
                                            <div className="relative">
                                                <div
                                                    className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <input name="end" type="date"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                                                    placeholder="Select date end"
                                                    onChange={(e) => (e.target.value)}
                                                    required />
                                            </div>
                                        </div>


                                    </div> */}

                  <div className="flex items-start"></div>
                  {/* <div><button onClick={Save} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button></div> */}
                  <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* </section> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProfileAdminHome;
