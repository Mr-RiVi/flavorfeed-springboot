package com.paf_assignment.flavorfeed.services;

import java.util.List;
import java.util.Optional;

import javax.xml.stream.events.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf_assignment.flavorfeed.models.comment;
import com.paf_assignment.flavorfeed.repositories.commentRepository;



public class commentServices {
    
    //Repository file alier to cpmmentRepositary. To use  CRUD functions in Service file
    @Autowired
    private commentRepository commentrepository;

    //Create comments as user
    // public Comment createComment(Comment comment) {
    //     return commentrepository.save(comment);
    // }
    public Comment creaComment(Comment comment){
        return commentrepository.save(comment)
    }

    public List<comment> getAllComments(){
        return commentrepository.findAll();
    }

    public Optional<comment> getCommentById(String id){
        return commentrepository.findById(id);

    }
}
