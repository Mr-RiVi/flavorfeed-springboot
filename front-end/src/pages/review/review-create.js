import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import Background from "../../assets/images/reviewbg.jpg";

export default function ReviewCreate() {
  const { profileId } = useParams();
  const [review, setReview] = useState({
    reviewId: '',
    reviewImg: '',
    reviewDate: '',
    reviewTitle: '',
    reviewLocation: '',
    reviewDescription: '',
    reviewLikeCount: 0,
    reviewRate: 0
  });
  const [image, setImage] = useState(null); // store uploaded image file
  const [imageUrl, setImageUrl] = useState(''); // store image download URL

  useEffect(() => {
    const fetchReviewId = async () => {
      const response = await fetch(`http://localhost:3000/api/profile/${profileId}`);
      const profileData = await response.json();
      const allReviews = profileData.reviews;
      const existingReviewIds = allReviews.map((review) => review.reviewId);
      let newReviewId = '';
      for (let i = 1; i <= 1000; i++) {
        newReviewId = `R${i.toString().padStart(3, '0')}`;
        if (!existingReviewIds.includes(newReviewId)) {
          break;
        }
      }
      if (newReviewId) { // check if newReviewId is not null or undefined
        setReview(prevState => ({ ...prevState, reviewId: newReviewId }));
      }
    };
    fetchReviewId();
  }, [profileId]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
  
    // Check if a file is selected
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        setImageUrl(reader.result);
      };
  
      reader.readAsDataURL(file);
      setImage(file);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `review/${image.name + v4()}`);

    await uploadBytes(storageRef, image)
      .then(() => {
        console.log("uploaded");
      })
      .catch((err) => {
        console.log(err);
      });

    await getDownloadURL(storageRef)
      .then(async (url) => {
        setImageUrl(url); // set image download URL

        const newReview = {
          ...review,
          reviewImg: url,
          reviewDate: new Date().toISOString()
        };

        const BASE_URL = `http://localhost:3000/api/profile/review/create/${profileId}`;

        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });
        const content = await response.json();
        alert('Review Add successfully');
        window.location.href = `../profiledetail/${profileId}`
        // window.location.href = `../../profiledetail/${profileId}`
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" ml-44 p-10 -mt-28">
          <div class="p-8 bg-gray-400 shadow mt-28 opacity-90 rounded-3xl ">
            <div class="grid grid-cols-1 md:grid-cols-3">

              {/* profile pic */}
              <div class="relative">
                <div class="w-96 h-60 bg-gray-500 mx-auto rounded-xl shadow-2xl absolute mt-20 -ml-[470px] flex items-center justify-center text-slate-700 left-[500px] ">
                  {imageUrl && <img src={imageUrl} alt="Selected" />} 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.996 4h14.008c.55 0 .996.448.996 1v10c0 .552-.446 1-.996 1H2.996C2.446 16 2 15.552 2 15V5c0-.552.446-1 .996-1zm0-2C1.444 2 1 2.448 1 3v12c0 .552.444 1 1 1h14.008c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H2.996zM7.5 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S9 10.328 9 9.5 8.328 8 7.5 8zM17 14l-4.293-4.293c-.19-.19-.442-.293-.707-.293s-.517.103-.707.293L8 13.586 6.707 12.293c-.39-.39-1.023-.39-1.414 0l-3 3c-.391.391-.391 1.023 0 1.414l4.293 4.293c.19.19.442.293.707.293s.517-.103.707-.293L12 16.414l1.293 1.293c.19.19.442.293.707.293s.517-.103.707-.293l3-3c.391-.391.391-1.023 0-1.414z" />
                  </svg>
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
                    name="reviewTitle"
                    value={review.reviewTitle}
                    onChange={handleChange}
                  />

                  {/* Description */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Location"
                    name="reviewLocation"
                    value={review.reviewLocation}
                    onChange={handleChange}
                  />

                  {/* Work History */}
                  <TextField
                    id="outlined-multiline-static"
                    type="date"
                    name="reviewDate"
                    value={review.reviewDate}
                    onChange={handleChange}
                  />

                  {/* Education */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Description"
                    multiline
                    rows={2}
                    name="reviewDescription"
                    value={review.reviewDescription}
                    onChange={handleChange}
                  />

                  {/* Education */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Rate(1-5)"
                    name="reviewRate"
                    value={review.reviewRate}
                    onChange={handleChange}                
                  />
                </form>
              </div>

              <div className="flex justify-end mt-3">
                <button className="button-1 w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </form> 
    </div>
  );
}
