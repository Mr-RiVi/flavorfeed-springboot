import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const ReviewCreate = () => {
  const { profileId } = useParams();
  const [review, setReview] = useState({
    reviewId: '',
    reviewImg: '',
    reviewerName: '',
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

  const handleImageUpload = async (e) => {
    // Get the file extension from the file name
    const fileExtension = e.target.files[0].name.split('.').pop().toLowerCase();

    // Check if the file is of the allowed types
    const allowedTypes = ['jpg', 'jpeg', 'png'];
    if (!allowedTypes.includes(fileExtension)) {
      console.log('Invalid file type');
      return;
    }

    setImage(e.target.files[0]);
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
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <h1>Review Creation</h1>

      <div className="flex-auto pl-6 pr-6">
        <form onSubmit={handleSubmit}>
        
          {/* uploadImg */}
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="default_size"
            type="file"
            name="image"
            required
            onChange={handleImageUpload}
          />

          <TextField 
            id="outlined-basic"
            label="Name"
            name="reviewerName"
            value={review.reviewerName}
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic"
            label="Date"
            name="reviewDate"
            value={review.reviewDate}
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic"
            label="Title"
            name="reviewTitle"
            value={review.reviewTitle}
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic"
            label="Location"
            name="reviewLocation"
            value={review.reviewLocation}
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic"
            label="Description"
            name="reviewDescription"
            value={review.reviewDescription}
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic"
            label="Like Count"
            name="reviewLikeCount"
            value={review.reviewLikeCount}
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic"
            label="Rate"
            name="reviewRate"
            value={review.reviewRate}
            onChange={handleChange}
          />

          <div>
            <Link to={`../../profile/${profileId}`}>
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Link>
            <Button type="submit" variant="contained" color="primary">
              Create Review
            </Button>
          </div>
        </form>                  
      </div>  
    </div>
  );
};

export default ReviewCreate;
