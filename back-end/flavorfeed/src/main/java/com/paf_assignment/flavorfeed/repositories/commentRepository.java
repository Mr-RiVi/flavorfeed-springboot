package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf_assignment.flavorfeed.models.comment;

@Repository
 public interface commentRepository extends MongoRepository<comment,  >
// public interface commentRepository extends MongoRepository<comment, String> {
    
// }