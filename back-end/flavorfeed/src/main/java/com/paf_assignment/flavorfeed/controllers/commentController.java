package com.paf_assignment.flavorfeed.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf_assignment.flavorfeed.models.comment;
import com.paf_assignment.flavorfeed.repositories.commentRepository;
import com.paf_assignment.flavorfeed.services.commentServices;


@RestController
@RequestMapping("api/comment")
public class commentController {
     //Service file alier to CommentService keyword. To use CRUD functions in Controller file
     @Autowired //
     private commentServices CommentServices;
 
     //Create Comment as user
     @PostMapping("/create")
     public ResponseEntity<comment> createComment(@RequestBody comment Comment) {
        comment createComment = CommentServices.createComment(Comment);
         return new ResponseEntity<>(createComment, HttpStatus.CREATED);
     }
 
     @GetMapping("/list")
     public ResponseEntity<List<comment>> getAllComments(){
         List<comment> Comment = CommentServices.getAllComments();
         return new ResponseEntity<>(Comment, HttpStatus.OK);
     }
 
     @GetMapping("/{id}")
         public ResponseEntity<comment> getCommentById(@PathVariable String id) {
             Optional<comment> review = CommentServices.getCommentById(id);
             if(review.isPresent()){
                 return new ResponseEntity<>(review.get(), HttpStatus.OK);
             }else {
                 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
             }
         }
     
    
}
