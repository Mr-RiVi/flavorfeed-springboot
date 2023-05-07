package com.paf_assignment.flavorfeed.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "profiles")
public class Profile {
    
    @Id
    private String profileId;

    private String profileName;

    private String profileEmail;

    private String profileContactNo;

    private String profileDesc;

    private String profileImg;

    private String profileFollow;

    private String profilePassword;

    private String profileDesc;

    private String profileImg;

    private String profileFollow;

    private List<Review> reviews;


    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public String getProfileEmail() {
        return profileEmail;
    }

    public void setProfileEmail(String profileEmail) {
        this.profileEmail = profileEmail;
    }

    public String getProfileContactNo() {
        return profileContactNo;
    }

    public void setProfileContactNo(String profileContactNo) {
        this.profileContactNo = profileContactNo;
    }

    public String getProfilePassword() {
        return profilePassword;
    }

    public void setProfilePassword(String profilePassword) {
        this.profilePassword = profilePassword;
    }    

    public String getProfileDesc() {
        return profileDesc;
    }

    public void setProfileDesc(String profileDesc) {
        this.profileDesc = profileDesc;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public String getProfileDesc() {
        return profileDesc;
    }

    public void setProfileDesc(String profileDesc) {
        this.profileDesc = profileDesc;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public String getProfileFollow() {
        return profileFollow;
    }

    public void setProfileFollow(String profileFollow) {
        this.profileFollow = profileFollow;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public Profile(String profileName, String profileEmail, String profileContactNo, String profilePassword,
            String profileDesc, String profileImg, String profileFollow, List<Review> reviews) {

        this.profileName = profileName;
        this.profileEmail = profileEmail;
        this.profileContactNo = profileContactNo;
        this.profileDesc = profileDesc;
        this.profileImg = profileImg;
        this.profileFollow = profileFollow;
        this.profilePassword = profilePassword;
        this.profileDesc = profileDesc;
        this.profileImg = profileImg;
        this.profileFollow = profileFollow;
        this.reviews = reviews;
    }

    public static class Review {
        private String reviewId;
        private String reviewImg;
        private String reviewerName;
        private String reviewDate;
        private String reviewTitle;
        private String reviewLocation;
        private String reviewDescription;        
        private String reviewLikeCount;
        private String reviewRate;

        //Getters & Setters
        public String getReviewId() {
            return reviewId;
        }
        public void setReviewId(String reviewId) {
            this.reviewId = reviewId;
        }
        public String getReviewImg() {
            return reviewImg;
        }
        public void setReviewImg(String reviewImg) {
            this.reviewImg = reviewImg;
        }
        public String getReviewerName() {
            return reviewerName;
        }
        public void setReviewerName(String reviewerName) {
            this.reviewerName = reviewerName;
        }
        public String getReviewDate() {
            return reviewDate;
        }
        public void setReviewDate(String reviewDate) {
            this.reviewDate = reviewDate;
        }
        public String getReviewTitle() {
            return reviewTitle;
        }
        public void setReviewTitle(String reviewTitle) {
            this.reviewTitle = reviewTitle;
        }
        public String getReviewLocation() {
            return reviewLocation;
        }
        public void setReviewLocation(String reviewLocation) {
            this.reviewLocation = reviewLocation;
        }
        public String getReviewDescription() {
            return reviewDescription;
        }
        public void setReviewDescription(String reviewDescription) {
            this.reviewDescription = reviewDescription;
        }
        public String getReviewLikeCount() {
            return reviewLikeCount;
        }
        public void setReviewLikeCount(String reviewLikeCount) {
            this.reviewLikeCount = reviewLikeCount;
        }
        public String getReviewRate() {
            return reviewRate;
        }
        public void setReviewRate(String reviewRate) {
            this.reviewRate = reviewRate;
        }

        public Review(String reviewId, String reviewImg, String reviewerName, String reviewDate, String reviewTitle,
                String reviewLocation, String reviewDescription, String reviewLikeCount, String reviewRate) {
            this.reviewId = reviewId;
            this.reviewImg = reviewImg;
            this.reviewerName = reviewerName;
            this.reviewDate = reviewDate;
            this.reviewTitle = reviewTitle;
            this.reviewLocation = reviewLocation;
            this.reviewDescription = reviewDescription;
            this.reviewLikeCount = reviewLikeCount;
            this.reviewRate = reviewRate;
        } 

    }
 
}
