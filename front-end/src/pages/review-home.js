import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Food from "../assets/images/food7.jpg";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import r2 from "../assets/images/review/R (3).jpeg";
import "../assets/styles/review.css";

const ReviewAdminHome = () => {
  const [value, setValue] = React.useState(2);
  const [Profiles, setProfiles] = useState([]);
  
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
  
  const lineStyle = {
    position: "absolute",
    left: "30%",
    transform: "translateX(-50%)",
    top: "20%",
    height: "20%",
    width: "2px",
    backgroundColor: "white",
    margin: "1px 0",
  };

  const secondLineStyle = {
    position: "absolute",
    left: "30%",
    transform: "translateX(-50%)",
    top: "150%",
    height: "90%",
    width: "2px",
    backgroundColor: "white",
    margin: "20px 0",
  };

  return (
    <div>
      <div className="review bg-gray-200">
        <img src={Food} alt="" className=" h-auto w-auto opacity-90 " />
        <div style={lineStyle}>
          <div className="line , h-[200px], absolute, left-1/3 -ml-0">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1 className="text-4xl  text-white font-serif mb-0 -ml-20   ">
              Welcome
            </h1>
            <h1 className="text-3xl  text-white font-serif mb-0 -ml-9">
              FlavorFeed
            </h1>
          </div>
          <div style={secondLineStyle}></div>
        </div>
        <div className="absolute,  ml-80">
          <h1 className="text-5xl  text-black font-serif mt-5 mb-0 ml-52 drop-shadow-lg shadow-black">
            OUR REVIEWS
          </h1>
        </div>

        <div className="w-[1382px] justify-center h-auto bg-gray-200 ">
      <div className="flex flex-row overflow-auto justify-start mt-2 mb-10 drop-shadow-2xl w-[1382px]">
        
        {Profiles.map((profile, i) => (
          <div key={profile.profileId}>
            {getReviews(profile.profileId).map((review) => (
              <form key={review.reviewId} class="flex-auto pl-6 pr-6 pb-4">

                <div class="card ml-4 mt-4 mb-5  p-3">
                  <div class="comment-container ml-4  ">
                      <div class="user">
                        
                          <div class="user-pic">
                          <h1 hidden>{i + 1}</h1>
                          {/* <h1 hidden>{j + 1}</h1> */}
                            <Link to={`../profiledetail/${profile.profileId}`} >
                              <button
                            
                            >
                                <Stack direction="row" spacing={2}>     
                                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                                </Stack>
                              </button>
                            </Link>                             
                            
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
                      <button>
                      <IconButton aria-label="add to favorites">
                       <FavoriteIcon color="secondary"/>
                      </IconButton>
                      
                      </button>  
                      <span>{review.reviewLikeCount}</span>
                      <hr/>

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
                            src={r2} //food photo
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
                            // value={value}
                            // onChange={(event, newValue) => {
                            //   setValue(newValue);
                            // }}
                          />
                          {/* <Typography component="legend">Read only</Typography>
                          <Rating name="read-only" value={value} readOnly /> */}
                        </Box>

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
