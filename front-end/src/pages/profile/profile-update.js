import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import profilePic from "../../assets/images/profilePic.jpg";
import Background from "../../assets/images/bg1.jpg";

export default function ProfileUpdate() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/profile/${id}`);
        const json = await response.json();
        if (response.ok) {
          setProfile(json);
          setUpdatedProfile(json);
        } else {
          throw new Error("Failed to fetch profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [id]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `profileImages/${uuidv4()}`);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedProfileData = { ...updatedProfile, profileImg: imageUrl };
      const response = await fetch(`http://localhost:3000/api/profile/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfileData),
      });
      if (response.ok) {
        alert("Profile updated successfully");
        window.location.href = `../profiledetail/${id}`
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //delete
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this profile?");
  
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/profile/delete/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          setDeleteSuccess(true);
          alert("Profile Deleted successfully");
          window.location.href = `../../reviewerHome`
        } else {
          throw new Error("Failed to delete profile");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-[1382px] justify-center h-auto bg-style-">
      <div className="review bg-gray-200">
        <img
          src={Background}
          alt=""
          className="fixed h-auto w-full bg-opacity-100"
        />
      </div>
      {profile && (
        <div class="p-16 -mt-10 ">
          <div class="p-8 bg-gray-300 shadow mt-24 opacity-90 rounded-3xl">
            <div class="grid grid-cols-1 md:grid-cols-3">
              {/* profile pic */}
              <div class="relative">
                <div class="w-48 h-48 bg-gray-400 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-slate-700 left-[500px] ">
                  <img
                    src={imageUrl || profile.profileImg || profilePic}
                    alt=""
                    className=" opacity-100 rounded-full shadow-xl h-auto align-middle border-none max-w-150-px"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div className="mr-44">
                  <input
                    className="mt-28 ml-[485px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="default_size"
                    type="file"
                    name="image"
                    required
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            <div class=" flex flex-col justify-center ">
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">

                  {/* Name */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="profile Name"
                    defaultValue={profile.profileName}
                    onChange={(e) => setUpdatedProfile({...updatedProfile, profileName: e.target.value})}
                  />

                  {/* Description */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="profile Email"
                    defaultValue={profile.profileEmail}
                    onChange={(e) => setUpdatedProfile({...updatedProfile, profileEmail: e.target.value})}
                  />

                  {/* Work History */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="profile Contact No"
                    defaultValue={profile.profileContactNo}
                    onChange={(e) => setUpdatedProfile({...updatedProfile, profileContactNo: e.target.value})}
                  />

                  {/* Education */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="profile Description"
                    defaultValue={profile.profileDesc}
                    onChange={(e) => setUpdatedProfile({...updatedProfile, profileDesc: e.target.value})}
                  />
                </form>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  className="button-1 w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                  onClick={handleUpdateProfile}
                >
                  Save
                </button>

                <button
                  className="button-2 w-28 h-10 mr-16 -mt-4 rounded-3xl bg-cyan-700 text-black"
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    //   </div>
  );
}
