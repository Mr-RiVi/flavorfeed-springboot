package com.paf_assignment.flavorfeed.models.request;

import lombok.Data;

@Data
public class CommentRequest {
    private String postId;
    private String userId;
    private String description;

}
