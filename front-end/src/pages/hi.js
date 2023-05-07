import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import '../assets/styles/review.css';

const Recipehi = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/profile/${id}`);
        const json = await response.json();
        if (response.ok) {
          setProfile(json);
        } else {
          throw new Error("Failed to fetch profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const getReviews = (profileId) => {
    if (profile && profile.profileId === profileId) {
      return profile.reviews;
    } else {
      return [];
    }
  };

  return (
    <div>
      {profile && (
        <div class="pl-6">
          <h1> {profile.profileName} </h1>
          <h1> {profile.profileEmail} </h1>
          <h1> {getReviews(profile.profileId).length} reviews </h1>
          <br></br>

          {getReviews(profile.profileId).map((review, i) => (
            <form key={review.reviewId} class="flex-auto pl-6 pr-6">
              <h1 hidden>{i + 1}</h1>

              <h1> {review.reviewTitle} </h1>
              <h1> {review.reviewDate} </h1>

              <br></br>
            </form>
          ))}

        </div>
      )}
    </div>
  );
};

export default Recipehi;

