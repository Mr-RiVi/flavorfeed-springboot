package com.paf_assignment.flavorfeed.services.impl;

import com.paf_assignment.flavorfeed.models.Comments;
import com.paf_assignment.flavorfeed.models.request.CommentRequest;
import com.paf_assignment.flavorfeed.repositories.CommentsRepository;
import com.paf_assignment.flavorfeed.services.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentsServiceImpl implements CommentsService {

    @Autowired
    private CommentsRepository repository;

    // CRUD operations
    @Override
    public Comments addComments(CommentRequest request) {
        Comments comments = new Comments();
        comments.setUserId(request.getUserId());
        comments.setPostId(request.getPostId());
        comments.setDescription(request.getDescription());
        comments.setCommentID(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(comments);
    }

    @Override
    public List<Comments> findCommentsByPost(String postId) {
        return repository.findAllByPostId(postId);
    }

    @Override
    public Comments getCommentByCommentID(String commentID) {
        return repository.findById(commentID).get();
    }

    @Override
    public Comments updateComments(String commentId, CommentRequest request) {
        Comments existingComments = repository.findById(commentId).get();
        existingComments.setDescription(request.getDescription());
        return repository.save(existingComments);
    }

    @Override
    public String deleteComment(String commentID) {
        repository.deleteById(commentID);
        return commentID + "comment has been deleted from the comment section";
    }

}
