package com.paf_assignment.flavorfeed.models;

import java.util.List;

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

    private List<Product> products;


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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Review(String reviewTitle, String reviewDescription, String reviewerName, String reviewDate, List<Product> products) {
        this.reviewTitle = reviewTitle;
        this.reviewDescription = reviewDescription;
        this.reviewerName = reviewerName;
        this.reviewDate = reviewDate;
        this.products = products;
    }
    

    public static class Product {
        private String pid;
        private String pname;
        private String pcost;

        public String getPid() {
            return pid;
        }

        public void setPid(String pid) {
            this.pid = pid;
        }

        public String getPname() {
            return pname;
        }

        public void setPname(String pname) {
            this.pname = pname;
        }

        public String getPcost() {
            return pcost;
        }

        public void setPcost(String pcost) {
            this.pcost = pcost;
        }

        public Product(String pid, String pname, String pcost) {
            this.pid = pid;
            this.pname = pname;
            this.pcost = pcost;
        }
    }


}