import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import '../../assets/styles/review.css';
import Profile1 from "../../assets/images/Profile1.jpg";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [followed, setFollowed] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [likedReviews, setLikedReviews] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/profile/${id}`);
        const json = await response.json();
        if (response.ok) {
          setProfile(json);
          const storedFollowed = JSON.parse(localStorage.getItem("followed"));
          if (storedFollowed !== null) {
            setFollowed(storedFollowed);
          } else {
            setFollowed(json.profileFollow);
          }
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

  const handleFollow = async () => {
    try {
      const updatedProfile = { ...profile, profileFollow: !followed };
      const response = await fetch(`http://localhost:3000/api/profile/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });
      if (response.ok) {
        const updatedFollowed = !followed;
        setFollowed(updatedFollowed);
        localStorage.setItem("followed", JSON.stringify(updatedFollowed));
        setButtonDisabled(true); // Disable the button after state change
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Like function
  const handleLikeClick = async (profileId, reviewId) => {
    if (likedReviews.includes(reviewId)) {
      return;
    }
    setLikedReviews((prev) => [...prev, reviewId]);

    const response = await fetch(
      `http://localhost:3000/api/profile/review/${profileId}/${reviewId}`
    );
    const review = await response.json();

    const updatedReview = {
      ...review,
      reviewLikeCount: Number(review.reviewLikeCount) + 1,
    };

    const putResponse = await fetch(
      `http://localhost:3000/api/profile/review/update/${profileId}/${reviewId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      }
    );

    if (!putResponse.ok) {
      console.error(`Failed to update like count for review ${reviewId}`);
    }
  };

  return (
    <div>
      {profile && (
        <div>
          <div className="review bg-gray-200">
            <img src={Profile1} alt="" className="h-fit w-fit opacity-80 " />
          </div>

          <div className="left-60 -mt-[400px]  h-full w-full flex  items-center opacity-95 ">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="container mx-auto px-4">
              <div class="relative flex flex-col min-w-0 break-words bg-slate-600 w-full shadow-xl rounded-lg -mt-64">
                <div class="px-6">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div class="relative">
                        <div class="w-60 h-60 bg-gray-400 mx-auto rounded-full shadow-2xl absolute -mt-20 -ml-28 flex items-center justify-center text-slate-700 ">
                          <img
                            src={profile.profileImg}
                            alt=""
                            className=" opacity-100 rounded-full shadow-xl h-auto align-middle border-none max-w-150-px"
                          />

                        </div>
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div class="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className={`bg-violet-800 active:bg-gray-400 uppercase text-white font-bold hover:shadow-md shadow 
                          text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 ${
                              followed ? "bg-gray-400" : ""
                          }`}
                          type="button"
                          onClick={buttonDisabled ? null : handleFollow}
                          >
                          {followed ? "Followed" : "Follow"}
                        </button>
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-1">
                      <div class="flex justify-center py-4 lg:pt-4 pt-8">
                        <div class="mr-4 p-3 text-center">
                          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            6
                          </span>
                          <span class="text-sm text-blueGray-400">Following</span>
                        </div>
                        <div class="mr-4 p-3 text-center">
                          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {getReviews(profile.profileId).length}
                          </span>
                          <span class="text-sm text-blueGray-400">Reviews</span>
                        </div>
                        <div class="lg:mr-4 p-3 text-center">
                          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            1
                          </span>
                          <span class="text-sm text-blueGray-400">Comments</span>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  <div class="text-center mt-16">
                    <h3 class="text-4xl font-semibold leading-normal mb-1 text-blueGray-700 ">
                    {profile.profileName}
                    </h3>
                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      Panadura, Sri Lanka
                    </div>
                    <h3 class="text-lg font-bold leading-normal mb-1 text-blueGray-700 ">
                      {profile.profileEmail}
                    </h3>  
                  </div>

                  <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-9/12 px-4">
                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {profile.profileDesc}
                           An artist of considerable range, Jenna the name taken by
                          Melbourne-raised, Brooklyn-based Nick Murphy writes,
                          performs and records all of his own music, giving it a
                          warm, intimate feel with a solid groove structure. An
                          artist of considerable range.
                        </p>
                      </div>                     
                    </div>
                    <div>

                      <Link to={`../profileupdate/${profile.profileId}`}>
                        <button className="bg-emerald-900 hover:bg-sky-900 text-white font-extrabold py-2 
                          px-16 border-b-4 border-emerald-700 hover:border-blue-500 rounded-2xl mt-4">
                          Update
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 w-[1382px] justify-center h-auto bg-gray-200 ">
              <h3 class="mt-12 p-5 font-semibold leading-normal ml-[520px] text-5xl text-black font-serif drop-shadow-lg shadow-black">
                  My Reviews
                </h3>
            <div className="-mt-5 mb-6 drop-shadow-2xl w-[1382px]">
              {getReviews(profile.profileId).map((review, i) => (
                <form key={review.reviewId} class="flex-auto pl-6 pr-6">
                  <h1 hidden>{i + 1}</h1>

                  <div class="card ml-4 mt-4 mb-5 p-3 ">
                    <div class="comment-container ml-4  ">
                        <div class="user">
                          
                            <div class="user-pic">
                            <h1 hidden>{i + 1}</h1>
                            <div>
                              {profile.profileImg ? (
                                <Avatar alt="Profile picture" src={profile.profileImg} />
                              ) : (
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{profile.name[0]}</Avatar>
                              )}
                            </div>

                              <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                              </svg>
                            </div>
                            <div class="user-info">
                            <span>{profile.profileName}</span>
                            <p>{review.reviewDate}</p>
                            
                            </div>
                        </div>
                    </div>

                    <div class="comments">
                      <div class="comment-react mt-4">
                  
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        
                        {/* like button */}
                        <button
                            disabled={likedReviews.includes(review.reviewId)}
                            onClick={() =>
                              handleLikeClick(profile.profileId, review.reviewId)
                            }
                          >
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon color="secondary" />
                            </IconButton>
                          </button>
                          <span>
                            {likedReviews.includes(review.reviewId)
                              ? Number(review.reviewLikeCount) + 1
                              : review.reviewLikeCount}
                          </span>
                          <hr />

                        <button>
                          <IconButton aria-label="share">
                          <MarkUnreadChatAltIcon />
                        </IconButton>
                        </button> 
                        <span>3</span>
                        <hr/>

                        <button>
                          <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        </button>
                        
                      </Card>
                        <hr/>

                      </div>
                      <div class="comment-container">

                        <div class="user">
                          <div class="w-80 ">
                            <img
                              className="rounded-3xl"
                              src={review.reviewImg} //food photo
                              alt=""
                            />     
                          </div>
                        </div>

                        <div className="-ml-12 h-[150px]">
                          <p class="font-semibold mt-3">
                            {review.reviewTitle}
                          </p>
                          <p class="comment-content font-semibold">
                            {review.reviewLocation}
                          </p>
                          <p class="comment-content mt-3 ">
                            {review.reviewDescription}
                          </p>

                          <Box
                            sx={{
                              '& > legend': { mt: 1 },
                            }}
                          >
                            <Typography component="legend"></Typography>
                            <Rating
                              name="simple-controlled"
                              size="small"
                              value={review.reviewRate}
                              readOnly
                            />
                          </Box>

                        </div>
                      </div>
                    </div>  
                    <div className="relative flex flex-col">
                    <Link to={`../reviewupdate/${profile.profileId}/${review.reviewId}`}>
                      <button>Update</button>
                    </Link>
                    </div> 
                  </div>                  
                  <br></br>                 
                </form>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center -mt-6 mb-4 h-20 bg-gray-400">
            <Link to={`../reviewcreate/${profile.profileId}`}>
              <button className="bg-sky-700 hover:bg-sky-900 text-white font-extrabold py-2 
                px-28 border-b-4 border-blue-700 hover:border-blue-500 rounded-2xl mt-4">
                Create Review
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;