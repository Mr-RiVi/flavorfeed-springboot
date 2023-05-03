import * as React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import r2 from '../assets/images/review/R (3).jpeg';
import '../assets/styles/review.css';

export default function RecipeReviewCard() {
  const [value, setValue] = React.useState(2);
  
  return (
    <div class="card ml-4 mt-4 p-3">
        <div class="comment-container ml-4 ">
            <div class="user">
                <div class="user-pic">
                  <Stack direction="row" spacing={2}>     
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                  </Stack>
                  <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </div>
                <div class="user-info">
                <span>Yassine Zanina</span>
                <p>Wednesday, March 13th at 2:45pm</p>
                </div>
            </div>
        </div>

  <div class="comments">
    <div class="comment-react mt-4">
 
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
      <button>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      
      </button>  
      <span>24</span>
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

      <div className="-ml-12">
        <p class="font-semibold mt-3">
          Exotic Kitchen
        </p>
        <p class="comment-content font-semibold">
          Panadura
        </p>
        <p class="comment-content mt-3">
          I've been using this product for a few days now and I'm really impressed! The interface is intuitive and easy to
          use, and the features are exactly what I need to streamline my workflow.
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
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          {/* <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly /> */}
        </Box>


      </div>
      
      

    </div>
  </div>

  
</div>

  );
}