package com.paf_assignment.flavorfeed.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
public class Review {
    
    @Id
    private String reviewId;

    private String reviewTitle;

    private String reviewDescription;

    private String reviewerName;

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

    public Review(String reviewTitle, String reviewDescription, String reviewerName, String reviewDate) {
        this.reviewTitle = reviewTitle;
        this.reviewDescription = reviewDescription;
        this.reviewerName = reviewerName;
        this.reviewDate = reviewDate;
    }


}