import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Background from "../assets/images/reviewbg.jpg";

export default function UpdateReviewDetails() {
  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>
      <div className=" ml-44 p-10 -mt-28">
        <div class="p-8 bg-gray-400 shadow mt-28 opacity-90 rounded-3xl ">
          <div class="grid grid-cols-1 md:grid-cols-3">

            {/* profile pic */}
            <div class="relative">
              <div class="w-96 h-60 bg-gray-500 mx-auto rounded-xl shadow-2xl absolute mt-20 -ml-[470px] flex items-center justify-center text-slate-700 left-[500px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.996 4h14.008c.55 0 .996.448.996 1v10c0 .552-.446 1-.996 1H2.996C2.446 16 2 15.552 2 15V5c0-.552.446-1 .996-1zm0-2C1.444 2 1 2.448 1 3v12c0 .552.444 1 1 1h14.008c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H2.996zM7.5 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S9 10.328 9 9.5 8.328 8 7.5 8zM17 14l-4.293-4.293c-.19-.19-.442-.293-.707-.293s-.517.103-.707.293L8 13.586 6.707 12.293c-.39-.39-1.023-.39-1.414 0l-3 3c-.391.391-.391 1.023 0 1.414l4.293 4.293c.19.19.442.293.707.293s.517-.103.707-.293L12 16.414l1.293 1.293c.19.19.442.293.707.293s.517-.103.707-.293l3-3c.391-.391.391-1.023 0-1.414z" />
                </svg>
              </div>
              <div className="mr-6">
                <input
                  className="mt-[360px] ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="default_size"
                  type="file"
                  name="image"
                  required
                  //onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          <div class="justify-center">
            {/* <div key={ProductIdea._id}> */}
            <div class="flex flex-col p-[20px] w-96 -mt-[450px] mr-10 justify-center m-auto font-serif">
              {/* Mentor private details */}
              <form class="flex flex-col mt-[20px] gap-6 ">
                {/* Name */}
                <TextField //single line
                  id="outlined-read-only-input"
                  label="Title"
                  //onChange={(e) => { setideaName(e.target.value) }}
                  //defaultValue={ProductIdea.ideaName}
                />

                {/* Description */}
                <TextField //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Location"
                  //onChange={(e) => { setideaDescription(e.target.value) }}
                  //defaultValue={ProductIdea.ideaDescription}
                />

                {/* Work History */}
                <TextField
                  id="outlined-multiline-static"
                  type="date"
                  //onChange={(e) => { setideaIndustry(e.target.value) }}
                  //defaultValue={ProductIdea.ideaIndustry}
                />

                {/* Education */}
                <TextField
                  id="outlined-read-only-input"
                  label="Description"
                  //onChange={(e) => { setideaBudget(e.target.value) }}
                  //defaultValue={ProductIdea.ideaBudget}
                  multiline
                  rows={2}
                />

                {/* Education */}
                <TextField
                  id="outlined-read-only-input"
                  label="Rate(1-5)"
                  //onChange={(e) => { setideaBudget(e.target.value) }}
                  //defaultValue={ProductIdea.ideaBudget}                 
                />
              </form>
            </div>

            <div className="flex justify-end mt-3">
              <button
                className="button-1 w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                // value={mentor._id}
                // onClick={(e) => {
                //   console.log(e.target.value);
                // }}
              >
                Save
              </button>

              {/* <Link to={``}> */}
              <button
                className="button-2 w-28 h-10 mr-[60px] -mt-4 rounded-3xl bg-cyan-700 text-black opacity-95"
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
  );
}
