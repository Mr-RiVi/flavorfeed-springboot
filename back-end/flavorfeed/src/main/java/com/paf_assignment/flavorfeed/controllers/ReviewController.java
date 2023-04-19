package com.paf_assignment.flavorfeed.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf_assignment.flavorfeed.models.Review;
import com.paf_assignment.flavorfeed.services.ReviewService;

@RestController
@RequestMapping("api/review")
public class ReviewController {

    //Service file alier to reviewService keyword. To use CRUD functions in Controller file
    @Autowired
    private ReviewService reviewService;

    //Create Reviews as user
    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        // Call the createReview method from the service and return the created review with CREATED status
        Review createReview = reviewService.createReview(review);
        return new ResponseEntity<>(createReview, HttpStatus.CREATED);
    }

    //Get all Reviews as list
    @GetMapping("/list")
    public ResponseEntity<List<Review>> getAllReview(){
        // Call the getAllReview method from the service and return the list of reviews with OK status
        List<Review> review = reviewService.getAllReview();
        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    //Get Review by ReviewIDID
    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable String id) {
        Optional<Review> review = reviewService.getReviewById(id);
        // Call the getReviewById method from the service and return the review with OK status
        // If the review does not exist, return NOT_FOUND status
        if(review.isPresent()){
            return new ResponseEntity<>(review.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Update Review by ReviewID
    @PutMapping("/update/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable String id, @RequestBody Review updateReviewData) {
        // Call the getReviewById method from the service to get the existing review to be updated
        // If the review exists, update the review and return it with OK status
        // If the review does not exist, return NOT_FOUND status
        Optional<Review> existingReview = reviewService.getReviewById(id);
        if (existingReview.isPresent()) {
            Review existingReviewData = existingReview.get();
            existingReviewData.setReviewTitle(updateReviewData.getReviewTitle());
            existingReviewData.setReviewDescription(updateReviewData.getReviewDescription());
            existingReviewData.setReviewerName(updateReviewData.getReviewerName());
            existingReviewData.setReviewDate(updateReviewData.getReviewDate());
            Review updatedReview = reviewService.updatReview(id, existingReviewData);
            return new ResponseEntity<>(updatedReview, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Delete Review by ReviewID
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable String id) {
        // Call the deleteReview method from the service to delete the review with the given id
        // If the review does not exist, return NOT_FOUND status
        try {
            reviewService.deleteReview(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
}
