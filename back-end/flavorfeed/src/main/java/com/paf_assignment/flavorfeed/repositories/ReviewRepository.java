package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf_assignment.flavorfeed.models.Review;

public interface ReviewRepository extends MongoRepository<Review, String> {
    
}
