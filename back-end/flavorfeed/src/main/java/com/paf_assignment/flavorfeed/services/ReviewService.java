package com.paf_assignment.flavorfeed.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf_assignment.flavorfeed.models.Review;
import com.paf_assignment.flavorfeed.repositories.ReviewRepository;


@Service
public class ReviewService {
    
    //Repository file alier to reviewRepository. To use  CRUD functions in Service file
    @Autowired
    private ReviewRepository reviewRepository;

    //Create Reviews as user
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
}


