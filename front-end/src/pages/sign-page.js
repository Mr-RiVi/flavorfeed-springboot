import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUpPage = () => {
  const [profile, setProfile] = useState({
    profileId: "",
    profileName: "",
    profileEmail: "",
    profileContactNo: "",
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
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <div className="mt-5 mb-5">
        <TextField
          id="outlined-basic"
          label="Profile Name"
          name="profileName"
          value={profile.profileName}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Profile Email"
          name="profileEmail"
          value={profile.profileEmail}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Profile Contact No"
          name="profileContactNo"
          value={profile.profileContactNo}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Profile Password"
          name="profilePassword"
          type="password"
          value={profile.profilePassword}
          onChange={handleChange}
        />
        <div className="relative flex flex-row">
          <Button variant="contained" color="primary" onClick={handleCreate}>
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
