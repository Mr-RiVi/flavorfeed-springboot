import React, { useState, useEffect } from "react";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import "../../assets/styles/innovationCard.css";

const USERS_FETCH_URL = "http://localhost:3000/api/admin/all-users";
const USERS_DELETE_URL = "http://localhost:3000/api/admin/remove/";

const UserAccountList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  //user fetch handler
  const fetchUsers = async () => {
    try {
      const response = await axios.get(USERS_FETCH_URL);
      if (response?.status >= 200 && response?.status < 300) {
        setUsers(response?.data);
        console.log();

        // successful response
        console.log("Response is successful");
      } else {
        // unsuccessful response
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {}
  };

  //This function deleteing specific user when admin clicks the delete button
  const deleteUser = async () => {
    try {
      const response = await axios.delete(USERS_DELETE_URL + "P007");
      if (response?.status >= 200 && response?.status < 300) {
        console.log("deletion successfull");
      } else {
        // unsuccessful response
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="vault-section">
      {users.map((user) => (
        <div className="card">
          <div className="image">
            <img src={user.profileImg} alt="Card Image" className="card-img" />
          </div>
          <div className="card-body">
            {/* <h3 className="card-title">{user.profileName}</h3> */}
            <p className="card-industry">Name : {user.profileName}</p>
            <p className="card-stage">Email : {user.profileEmail}</p>
          </div>
          <button
            className="profile-button"
            onClick={() => {
              navigate(`../../reviewerHome/profiledetail?id=${user.profileId}`);
            }}
          >
            Profile
          </button>
          <button
            className="delete-button"
            onClick={() => {
              deleteUser();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default UserAccountList;
