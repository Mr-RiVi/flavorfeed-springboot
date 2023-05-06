import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReviewUpdate = () => {
  const { profileId, reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [reviewImg, setReviewImg] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewLocation, setReviewLocation] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [reviewLikeCount, setReviewLikeCount] = useState("");
  const [reviewRate, setReviewRate] = useState("");

  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reviewResponse = await fetch(`http://localhost:3000/api/profile/review/${profileId}/${reviewId}`);
        const reviewJson = await reviewResponse.json();
        if (reviewResponse.ok) {
          setReview(reviewJson);
          setReviewImg(reviewJson.reviewImg);
          setReviewerName(reviewJson.reviewerName);
          setReviewDate(reviewJson.reviewDate);
          setReviewTitle(reviewJson.reviewTitle);
          setReviewLocation(reviewJson.reviewLocation);
          setReviewDescription(reviewJson.reviewDescription);
          setReviewLikeCount(reviewJson.reviewLikeCount);
          setReviewRate(reviewJson.reviewRate);
        } else {
          throw new Error("Failed to fetch review");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchReview();
  }, [profileId, reviewId]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profile/review/update/${profileId}/${reviewId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reviewImg,
          reviewerName,
          reviewDate,
          reviewTitle,
          reviewLocation,
          reviewDescription,
          reviewLikeCount,
          reviewRate
        })
      });
      if (response.ok) {
        // window.location.reload();
        alert('Profile updated successfully');
        window.location.href = `../../profiledetail/${profileId}`
      } else {
        throw new Error("Failed to update review");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this profile?");
    
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/profile/review/delete/${profileId}/${reviewId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setDeleteSuccess(true);
          alert('Review Deleted successfully');
        } else {
          throw new Error("Failed to delete review");
        }
      } catch (error) {
        console.error(error);
      }
    }
    
  };

  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <h1>review update</h1>

      {review && (
        <div  className="flex-auto pl-6 pr-6">

            <TextField 
              id="outlined-basic"
              label="img"
              value={reviewImg}
              onChange={(e) => setReviewImg(e.target.value)}
            />
            <TextField 
            id="outlined-basic"
            label="name"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />
          <TextField 
            id="outlined-basic"
            label="date"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
          />
          <TextField 
            id="outlined-basic"
            label="title"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
          />
            <TextField 
              id="outlined-basic"
              label="location"
              defaultValue={reviewLocation}
              onChange={(e) => setReviewLocation(e.target.value)}
            />
            <TextField 
              id="outlined-basict"
              label="description"
              defaultValue={reviewDescription}
              onChange={(e) => setReviewDescription(e.target.value)}
            />
            <TextField 
              id="outlined-basic"
              label="like count"
              defaultValue={reviewLikeCount}
              onChange={(e) => setReviewLikeCount(e.target.value)}
            />
            <TextField 
              id="outlined-basic"
              label="rate"
              defaultValue={reviewRate}
              onChange={(e) => setReviewRate(e.target.value)}
            />

            <div>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update Review
            </Button>
            <Button variant="contained" color="primary" onClick={handleDelete}>
              Delete
            </Button>

            </div>     
              
          </div>  
      )}

    </div>
  );
};

export default ReviewUpdate;
