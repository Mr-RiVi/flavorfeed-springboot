package com.paf_assignment.flavorfeed.services;

import java.util.List;
import java.util.UUID;

// import javax.xml.stream.events.Comment;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;

import com.paf_assignment.flavorfeed.models.Comments;
import com.paf_assignment.flavorfeed.repositories.commentsRepo;

@Service
public class commentsServ {

    @Autowired
    private commentsRepo repository;

    // CRUD operations

    public Comments addComments(Comments comments) {
        comments.setCommentID(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(comments);
    }

    public List<Comments> findComments() {
        return repository.findAll();
    }

    public Comments getCommentBycommentID(String commentID) {
        return repository.findById(commentID).get();
    }

    public Comments updateComments(Comments commentsRequest) {
        Comments existingComments = repository.findById(commentsRequest.getCommentID()).get();
        existingComments.setDiscription(commentsRequest.getDiscription());
    }

}
