import React, { useState, useEffect } from "react";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const USERS_FETCH_URL = "http://localhost:7070/api/admin/all-admin-profiles";

const UserAccountList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  //user fetch handler
  const fetchUsers = async () => {
    try {
      const response = await axios.get(USERS_FETCH_URL);
      if (response.status >= 200 && response.status < 300) {
        setUsers(response?.data);

        // successful response
        console.log("Response is successful");
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
            <img
              src="https://placehold.it/300x200"
              alt="Card Image"
              className="card-img"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{user.fullName}</h3>
            <p className="card-industry">Industry : {user.username}</p>
            <p className="card-stage">Stage : {user.email}</p>
          </div>
          <div className="button">
            <button
              onClick={() => {
                navigate(`../../profile/user-overview?id=${user._id}`);
              }}
            >
              Profile
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserAccountList;
