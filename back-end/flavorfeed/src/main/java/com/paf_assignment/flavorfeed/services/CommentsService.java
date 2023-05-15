package com.paf_assignment.flavorfeed.services;

import com.paf_assignment.flavorfeed.models.Comments;
import com.paf_assignment.flavorfeed.models.request.CommentRequest;

import java.util.List;

public interface CommentsService {
    /**
     * add
     *
     * @param request
     * @return
     */
    Comments addComments(CommentRequest request);

    /**
     * get all
     *
     * @return
     */
    List<Comments> findCommentsByPost(String postId);

    /**
     * get by id
     *
     * @param commentID
     * @return
     */
    Comments getCommentByCommentID(String commentID);

    /**
     * update
     *
     * @param commentId
     * @param request
     * @return
     */
    Comments updateComments(String commentId, CommentRequest request);

    /**
     * delete
     *
     * @param commentID
     * @return
     */
    String deleteComment(String commentID);
}
