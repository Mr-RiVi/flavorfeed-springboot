import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import r2 from "../../assets/images/review/R (3).jpeg";

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, `review/${uuidv4()}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setReviewImg(url);
      });
    });
  };

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
        alert('Review updated successfully');
        window.location.href = `../../profiledetail/${profileId}`
      } else {
        throw new Error("Failed to update review");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <h1>review update</h1>

      {review && (
        <div  className="flex-auto pl-6 pr-6">
            <div class="mt-24 ml-24 mb-20 w-64 h-60">
            <img
              src={reviewImg || r2}
              alt=""
              className=" opacity-100 shadow-xl h-auto align-middle border-none  -m-16 -ml-20 lg:-ml-1 max-w-150-px"
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

            </div>     
              
          </div>  
      )}

    </div>
  );
};

export default ReviewUpdate;
