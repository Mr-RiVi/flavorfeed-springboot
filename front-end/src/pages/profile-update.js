import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ProfileUpdate = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [deleteSuccess, setDeleteSuccess] = useState(false);

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

  //update
  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profile/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
      if (response.ok) {
        alert('Profile updated successfully');
      } else {
        throw new Error('Failed to update profile');
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
