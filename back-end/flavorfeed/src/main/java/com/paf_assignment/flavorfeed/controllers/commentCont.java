package com.paf_assignment.flavorfeed.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.paf_assignment.flavorfeed.models.Comments;
import com.paf_assignment.flavorfeed.services.commentsServ;

@RestController
@RequestMapping("/comments")
public class commentCont {

    @Autowired
    private commentsServ serv;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comments createComments(@RequestBody Comments comments) {
        return serv.addComments(comments);
    }

    @GetMapping
    public List<Comments> getComments() {
        return serv.findComments();
    }

    @GetMapping("/{commentID}")
    public Comments getComments(@PathVariable String commentID) {
        return serv.getCommentBycommentID(commentID);
    }

    

}
