package com.paf_assignment.flavorfeed.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
public class Review {
    
    @Id
    private String reviewId;

    private String reviewTitle;

    private String reviewDescription;

    private String reviewerwName;

    private String reviewDate;

    public String getReviewId() {
        return reviewId;
    }

    public void setReviewId(String reviewId) {
        this.reviewId = reviewId;
    }

    public String getReviewTitle() {
        return reviewTitle;
    }

    public void setReviewTitle(String reviewTitle) {
        this.reviewTitle = reviewTitle;
    }

    public String getReviewDescription() {
        return reviewDescription;
    }

    public void setReviewDescription(String reviewDescription) {
        this.reviewDescription = reviewDescription;
    }

    public String getReviewerwName() {
        return reviewerwName;
    }

    public void setReviewerwName(String reviewerwName) {
        this.reviewerwName = reviewerwName;
    }

    public String getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
    }

    public Review(String reviewTitle, String reviewDescription, String reviewerwName, String reviewDate) {
        this.reviewTitle = reviewTitle;
        this.reviewDescription = reviewDescription;
        this.reviewerwName = reviewerwName;
        this.reviewDate = reviewDate;
    }

    

}