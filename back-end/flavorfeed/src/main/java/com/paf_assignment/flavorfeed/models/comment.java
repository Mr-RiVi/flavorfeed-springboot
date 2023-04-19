package com.paf_assignment.flavorfeed.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Comments")
public class comments {
    
    @Id
    private String commentId;

    private String commentDescription;

    private String commentDate;

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getCommentDescription() {
        return commentDescription;
    }

    public void setCommentDescription(String commentDescription) {
        this.commentDescription = commentDescription;
    }

    public String getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(String commentDate) {
        this.commentDate = commentDate;
    }

    

    public Review(String commentId, String commentDescription, String commentDate) {
        this.commentId = commentId;
        this.commentDescription = commentDescription;
        this.commentDate = commentDate;
    }


}