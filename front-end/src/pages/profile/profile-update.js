import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import profilePic from "../../assets/images/profilePic.jpg";

const ProfileUpdate = () => {
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
        } else {
          throw new Error("Failed to delete profile");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      {profile && (
        <div className="mt-5 mb-5">
          <div class="mt-24 ml-24 mb-20 w-56 h-60">
            <img
              src={imageUrl || profile.profileImg || profilePic}
              alt=""
              className=" opacity-100 rounded-full shadow-xl h-auto align-middle border-none  -m-16 -ml-20 lg:-ml-1 max-w-150-px"
            />

            <input
              className="mt-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="default_size"
              type="file"
              name="image"
              required
              onChange={handleImageUpload}
            />
          </div>

          <TextField 
            id="outlined-read-only-input"
            label="profile Name"
            defaultValue={profile.profileName}
            onChange={(e) => setUpdatedProfile({...updatedProfile, profileName: e.target.value})}
          />
          <TextField 
            id="outlined-read-only-input"
            label="profile Email"
            defaultValue={profile.profileEmail}
            onChange={(e) => setUpdatedProfile({...updatedProfile, profileEmail: e.target.value})}
          />
          <TextField 
            id="outlined-read-only-input"
            label="profile Contact No"
            defaultValue={profile.profileContactNo}
            onChange={(e) => setUpdatedProfile({...updatedProfile, profileContactNo: e.target.value})}
          />
          <TextField 
            id="outlined-read-only-input"
            label="profile Password"
            defaultValue={profile.profilePassword}
            onChange={(e) => setUpdatedProfile({...updatedProfile, profilePassword: e.target.value})}
          />

          <div className="relative flex flex-row">
            <Button onClick={handleUpdateProfile} variant="contained" color="primary">
              Update
            </Button>

            <Button onClick={handleDelete} variant="contained" color="primary">
                Delete
            </Button>
            
          </div>   
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
