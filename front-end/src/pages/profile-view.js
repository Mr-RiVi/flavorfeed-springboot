import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import profilePic from "../assets/images/profilePic.jpg";
import Profile1 from "../assets/images/Profile1.jpg";
const ProfileDetails = () => {
  const [Profile, setProfile] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:7070/api/profile/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="review bg-gray-200">
        <img src={Profile1} alt="" className="h-fit w-fit opacity-80 " />
      </div>

      <div className="left-60 -mt-[400px]  h-full w-full flex  items-center opacity-95 ">
        {/* <div className="absolute left-80 top-0   h-full w-full   bg-sky-200 "> */}

        {/* <section className="bg-gray-800 dark:bg-gray-900 opacity-75"> */}
        {/* <div className="absolute  w-full flex-col items-center justify-center mr-0 -ml-0 -mt-10 px-32 py-16   bg-slate-600"> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-slate-600 w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
                    <img
                      src={profilePic}
                      alt=""
                      className=" opacity-100 rounded-full shadow-xl h-auto align-middle border-none  -m-16 -ml-20 lg:-ml-1 max-w-150-px"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-violet-800 active:bg-gray-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span class="text-sm text-blueGray-400">Following</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span class="text-sm text-blueGray-400">Reviews</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span class="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-16">
                <h3 class="text-4xl font-semibold leading-normal mb-1 text-blueGray-700 ">
                  Nalinga Kumarasiri
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Panadura, Sri Lanka
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" class="font-normal text-pink-500">
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;
