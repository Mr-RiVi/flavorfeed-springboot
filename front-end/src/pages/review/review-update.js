import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import Background from "../../assets/images/reviewbg.jpg";
import r2 from "../../assets/images/review/R (3).jpeg";
import r from "../../assets/images/review/R.jpeg";

export default function ReviewUpdate() {
  const { profileId, reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [reviewImg, setReviewImg] = useState("");
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

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profile/review/delete/${profileId}/${reviewId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Review deleted successfully');
        window.location.href = `../../profiledetail/${profileId}`
      } else {
        throw new Error("Failed to delete review");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>
      {review && (
        <div className=" ml-44 p-10 -mt-28">
          <div class="p-8 bg-gray-400 shadow mt-28 opacity-90 rounded-3xl ">
            <div class="grid grid-cols-1 md:grid-cols-3">
              {/* pic */}
              <div class="relative">
                <div class="w-96 h-60 bg-gray-500 mx-auto rounded-xl shadow-2xl absolute mt-20 -ml-[470px] flex items-center justify-center text-slate-700 left-[500px] ">
                  <img
                    src={reviewImg || r}
                    alt=""
                    className=" opacity-100 rounded-xl shadow-xl h-auto align-middle border-none max-w-150-px"
                  />

                </div>
                <div className="mr-6">
                  <input
                    className="mt-[360px] ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="default_size"
                    type="file"
                    name="image"
                    required
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            <div class="justify-center">
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-96 -mt-[450px] mr-10 justify-center m-auto font-serif">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">
                  
                  {/* Name */}
                  <TextField //single line
                    id="outlined-read-only-input"
                    label="Title"
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                  />

                  {/* Description */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Location"
                    defaultValue={reviewLocation}
                    onChange={(e) => setReviewLocation(e.target.value)}
                  />

                  {/* Work History */}
                  <TextField
                    id="outlined-multiline-static"
                    type="date"
                    value={reviewDate}
                    onChange={(e) => setReviewDate(e.target.value)}
                  />

                  {/* Education */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Description"
                    defaultValue={reviewDescription}
                    onChange={(e) => setReviewDescription(e.target.value)}
                    multiline
                    rows={2}
                  />

                  {/* Education */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Rate(1-5)"
                    defaultValue={reviewRate}
                    onChange={(e) => setReviewRate(e.target.value)}                 
                  />
                </form>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  className="button-1 w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                  onClick={handleUpdate}
                >
                  Save
                </button>

                <button
                  className="button-2 w-28 h-10 mr-[60px] -mt-4 rounded-3xl bg-cyan-700 text-black opacity-95"
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
