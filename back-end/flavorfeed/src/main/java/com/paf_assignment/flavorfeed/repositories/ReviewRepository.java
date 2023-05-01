package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf_assignment.flavorfeed.models.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    
}
