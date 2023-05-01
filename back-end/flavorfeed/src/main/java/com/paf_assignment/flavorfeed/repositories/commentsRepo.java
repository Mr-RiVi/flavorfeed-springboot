package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf_assignment.flavorfeed.models.Comments;

public interface commentsRepo extends MongoRepository<Comments, String> {


}
