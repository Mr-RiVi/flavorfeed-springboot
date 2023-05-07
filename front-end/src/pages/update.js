import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Background from "../assets/images/bg1.jpg";

export default function UpdateProfileDetails() {
  return (
    <div className="w-[1382px] justify-center h-auto bg-style-">
      <div className="review bg-gray-200">
        <img
          src={Background}
          alt=""
          className="fixed h-auto w-full bg-opacity-100"
        />
      </div>
      <div class="p-16 -mt-10 ">
        <div class="p-8 bg-gray-300 shadow mt-24 opacity-90 rounded-3xl">
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* profile pic */}
            <div class="relative">
              <div class="w-48 h-48 bg-gray-400 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-slate-700 left-[500px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="mr-44">
                <input
                  className="mt-28 ml-[485px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="default_size"
                  type="file"
                  name="image"
                  required
                  //onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          <div class="mt-7 text-center pb-6 border-b border-gray-800">
            <h1 class="text-3xl font-medium text-gray-700">
              Maleesha Shavindi
            </h1>
            <p class="mt-0 text-lg text-gray-500">maleeshashavindi@gmail.com</p>
            <p class="text-xl mt-0 font-medium text-gray-600 ">
              Panadura,Sri Lanka
            </p>
          </div>

          <div class=" flex flex-col justify-center ">
            {/* <div key={ProductIdea._id}> */}
            <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
              {/* Mentor private details */}
              <form class="flex flex-col mt-[20px] gap-6 ">
                {/* Name */}
                <TextField //single line
                  id="outlined-read-only-input"
                  label="Name"
                  //onChange={(e) => { setideaName(e.target.value) }}
                  //defaultValue={ProductIdea.ideaName}
                />

                {/* Description */}
                <TextField //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Email"
                  //onChange={(e) => { setideaDescription(e.target.value) }}
                  //defaultValue={ProductIdea.ideaDescription}
                />

                {/* Work History */}
                <TextField
                  id="outlined-multiline-static"
                  label="Phone"
                  //onChange={(e) => { setideaIndustry(e.target.value) }}
                  //defaultValue={ProductIdea.ideaIndustry}
                />

                {/* Education */}
                <TextField
                  id="outlined-read-only-input"
                  label="Password"
                  //onChange={(e) => { setideaBudget(e.target.value) }}
                  //defaultValue={ProductIdea.ideaBudget}
                />
              </form>
            </div>

            <div className="flex justify-end mt-4">
              <button
                className="button-1 w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                // value={mentor._id}
                // onClick={(e) => {
                //   console.log(e.target.value);
                // }}
              >
                Save
              </button>

              {/* <Link to={`../ideadelete/${ProductIdea._id}`}> */}
              <button
                className="button-2 w-28 h-10 mr-16 -mt-4 rounded-3xl bg-cyan-700 text-black"
                type="submit"
                // value={Entrepreneur._id}
                //   onClick={(e) => {
                //     console.log(e.target.value);
                //   }}
              >
                Delete
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
  );
}
