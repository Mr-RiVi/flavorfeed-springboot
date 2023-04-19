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

import com.paf_assignment.flavorfeed.models.comments;
import com.paf_assignment.flavorfeed.repositories.CommentRepository;

@RestController
@RequestMapping("api/comment")
public class commentController {
     //Service file alier to reviewService keyword. To use CRUD functions in Controller file
     @Autowired //
     private ReviewService reviewService;
 
     //Create Reviews as user
     @PostMapping("/create")
     public ResponseEntity<Review> createReview(@RequestBody Review review) {
         Review createReview = reviewService.createReview(review);
         return new ResponseEntity<>(createReview, HttpStatus.CREATED);
     }
 
     @GetMapping("/list")
     public ResponseEntity<List<Review>> getAllReview(){
         List<Review> review = reviewService.getAllReview();
         return new ResponseEntity<>(review, HttpStatus.OK);
     }
 
     @GetMapping("/{id}")
         public ResponseEntity<Review> getReviewById(@PathVariable String id) {
             Optional<Review> review = reviewService.getReviewById(id);
             if(review.isPresent()){
                 return new ResponseEntity<>(review.get(), HttpStatus.OK);
             }else {
                 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
             }
         }
     
    
}
