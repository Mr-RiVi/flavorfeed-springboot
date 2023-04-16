package com.paf_assignment.flavorfeed.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf_assignment.flavorfeed.models.Review;
import com.paf_assignment.flavorfeed.services.ReviewService;

@RestController
@RequestMapping("api/review")
public class ReviewController {

    //Service file alier to reviewService keyword. To use CRUD functions in Controller file
    @Autowired //
    private ReviewService reviewService;

    //Create Reviews as user
    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review createReview = reviewService.createReview(review);
        return new ResponseEntity<>(createReview, HttpStatus.CREATED);
    }
    
}
