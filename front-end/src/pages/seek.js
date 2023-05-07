import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../assets/styles/review.css";

const ReviewAdminHome = () => {
  const [Profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("profileName");

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/profile/list");
        const json = await response.json();
        if (response.ok) {
          setProfiles(json);
        } else {
          throw new Error("Failed to fetch profiles");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfiles();
  }, []);

  const getReviews = (profileId) => {
    const profile = Profiles.find((p) => p.profileId === profileId);
    if (profile) {
      return profile.reviews;
    } else {
      return [];
    }
  };

  const filterProfiles = () => {
    if (searchBy === "profileName") {
      return Profiles.filter((profile) =>
        profile.profileName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      const filteredProfiles = [];
      Profiles.forEach((profile) => {
        profile.reviews.forEach((review) => {
          if (review.reviewTitle.toLowerCase().includes(searchQuery.toLowerCase())) {
            filteredProfiles.push(profile);
          }
        });
      });
      return [...new Set(filteredProfiles)];
    }
  };

  return (
    <div>
      
      <div className="search-container ml-8 mt-5">
        <input
          type="text"
          placeholder={`Search ${searchBy === "profileName" ? "profiles" : "reviews"}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
          <option value="profileName">Profile Name</option>
          <option value="reviewTitle">Review Title</option>
        </select>
      </div>

      <div className="review bg-gray-200">
        <div className="w-[1382px] justify-center h-auto bg-gray-200 ">
          <div className="flex flex-row overflow-auto justify-start mt-2 mb-10 drop-shadow-2xl w-[1382px]">
            {filterProfiles().map((profile, i) => (
              <div key={profile.profileId}>
                {getReviews(profile.profileId).map((review) => (
                  <form key={review.reviewId} class="flex-auto pl-6 pr-6 pb-4">
                    <div class="card ml-4 mt-4 mb-5  p-3">
                      <div class="comments">
                        <div class="comment-react mt-4"></div>
                        <div class="comment-container">
                          <div className="-ml-12 h-[150px]">
                            <p class="font-semibold mt-3">{review.reviewTitle}</p>
                            <span>{profile.profileName}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAdminHome;
