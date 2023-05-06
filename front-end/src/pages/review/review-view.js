import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

const ReviewView = () => {
  const { profileId, reviewId } = useParams();
  const [profile, setProfile] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchProfileAndReview = async () => {
      try {
        const profileResponse = await fetch(`http://localhost:3000/api/profile/${profileId}`);
        const profileJson = await profileResponse.json();
        if (profileResponse.ok) {
          setProfile(profileJson);
        } else {
          throw new Error("Failed to fetch profile");
        }

        const reviewResponse = await fetch(`http://localhost:3000/api/profile/review/${profileId}/${reviewId}`);
        const reviewJson = await reviewResponse.json();
        if (reviewResponse.ok) {
          setReview(reviewJson);
        } else {
          throw new Error("Failed to fetch review");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileAndReview();
  }, [profileId, reviewId]);

  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <h1>review view</h1>

      {profile && review && (
        <div className="flex-auto pl-6 pr-6" >
          {/* <h1>{profile.name}</h1> */}

          <TextField 
            id="outlined-read-only-input"
            label="R ID"
            defaultValue={review.reviewId}
          />
          <TextField 
            id="outlined-read-only-input"
            label="img"
            defaultValue={review.reviewImg}
          />
          <TextField 
            id="outlined-read-only-input"
            label="name"
            defaultValue={review.reviewerName}
          />
          <TextField 
            id="outlined-read-only-input"
            label="date"
            defaultValue={review.reviewDate}
          />
          <TextField 
            id="outlined-read-only-input"
            label="title"
            defaultValue={review.reviewTitle}
          />
          <TextField 
            id="outlined-read-only-input"
            label="location"
            defaultValue={review.reviewLocation}
          />
          <TextField 
            id="outlined-read-only-input"
            label="description"
            defaultValue={review.reviewDescription}
          />
          <TextField 
            id="outlined-read-only-input"
            label="like count"
            defaultValue={review.reviewLikeCount}
          />
          <TextField 
            id="outlined-read-only-input"
            label="rate"
            defaultValue={review.reviewRate}
          />  
              
        </div>  
      )}

    </div>
  );
};

export default ReviewView;
