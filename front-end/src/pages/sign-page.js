import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Profile1 from "../assets/images/Profile1.jpg";

const SignUpPage = () => {
  const [profile, setProfile] = useState({
    profileId: "",
    profileName: "",
    profileEmail: "",
    profileContactNo: "",
    profileDesc: "a",
    profileImg: "a",
    profileFollow: "a",
    profilePassword: "",
    reviews: []
  });

  // Fetch all profiles to check for available profileId
  const fetchProfiles = async () => {
    const response = await fetch("http://localhost:3000/api/profile/list");
    const data = await response.json();
    const profileIds = data.map((profile) => profile.profileId);
    return profileIds;
  };

  // Generate new profileId by checking available ones from the database
  const generateProfileId = async () => {
    const profileIds = await fetchProfiles();
    let newId = "";
    for (let i = 1; i <= profileIds.length + 1; i++) {
      newId = "P" + i.toString().padStart(3, "0");
      if (!profileIds.includes(newId)) {
        break;
      }
    }
    return newId;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleCreate = async () => {
    try {
      const newProfile = {
        profileId: await generateProfileId(),
        profileName: profile.profileName,
        profileEmail: profile.profileEmail,
        profileContactNo: profile.profileContactNo,
        profileDesc: profile.profileDesc,
        profileImg: profile.profileImg,
        profileFollow: profile.profileFollow,
        profilePassword: profile.profilePassword,
        reviews: [{
          reviewId: profile.reviewId,
          // Add any other review properties here
        }]
      };
      const response = await fetch("http://localhost:3000/api/profile/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfile),
      });
      if (response.ok) {
        alert("Profile created successfully");
        setProfile({
          profileId: "",
          profileName: "",
          profileEmail: "",
          profileContactNo: "",
          profileDesc: "",
          profileImg: "",
          profileFollow: "",
          profilePassword: "",
          reviews: []
        });
      } else {
        throw new Error("Failed to create profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="review bg-gray-200">
        <img src={Profile1} alt="" className="fixed h-auto w-full bg-opacity-75" />
      </div>

      <div className="fixed left-60 top-0   h-full w-full flex  items-center">
        <h1 className="text-5xl text-white font-serif mb-[250px]">
          Welcome to Flavor Feed
        </h1>

        <div className="f1">
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
                      name="profileName"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Full Name"
                      value={profile.profileName}
                      onChange={handleChange}
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
                      name="profileEmail"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="x@gmail.com"
                      value={profile.profileEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="percentage"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="profileContactNo"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Phone"
                      value={profile.profileContactNo}
                      onChange={handleChange}
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
                      type="password"
                      name="profilePassword"
                      id="percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                      value={profile.profilePassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-start"></div>
                  <Link to={`../reviewerHome`}>              
                    <button
                      type="submit"
                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                        font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                        dark:focus:ring-green-800"
                      onClick={handleCreate}
                    >
                      Save
                    </button>
                  </Link>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
