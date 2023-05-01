package com.paf_assignment.flavorfeed.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.paf_assignment.flavorfeed.models.Review;
import com.paf_assignment.flavorfeed.repositories.ReviewRepository;

//This class serves as the service layer for Reviews, where the business logic resides.

@Service
public class ReviewService {
    
    
    @Autowired //Autowired instance of the ReviewRepository interface for accessing the database.
    private ReviewRepository reviewRepository; //Repository file alier to reviewRepository. To use  CRUD functions in Service file

    //Creates a new review in the database.
    //return The newly created review object.
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    //Returns a list of all the reviews in the database.
    //return List of all review objects.
    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }

    //Returns the review with the given ID from the database.
    //return Optional of the review object if it exists in the database, otherwise empty Optional.
    public Optional<Review> getReviewById(String id){
        return reviewRepository.findById(id);
    }

    //Updates an existing review with the given ID in the database.
    // return The updated review object.
    // throws ResponseStatusException with HttpStatus.NOT_FOUND if the review with the given ID doesn't exist.
    public Review updatReview(String id, Review review) {
        Optional<Review> optionalReview = reviewRepository.findById(id);

        if (optionalReview.isPresent()){
            Review existingReview = optionalReview.get();
            existingReview.setReviewTitle(review.getReviewTitle());
            existingReview.setReviewDescription(review.getReviewDescription());
            existingReview.setReviewerName(review.getReviewerName());
            existingReview.setReviewDate(review.getReviewDate());
            return reviewRepository.save(existingReview);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    //Deletes the review with the given ID from the database.
    //ResponseStatusException with HttpStatus.NOT_FOUND if the review with the given ID doesn't exist.
    public void deleteReview(String id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);

        if (optionalReview.isPresent()) {
            reviewRepository.delete(optionalReview.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }
}


