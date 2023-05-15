package com.paf_assignment.flavorfeed.repositories;

import com.paf_assignment.flavorfeed.models.Comments;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Data layer
 */
@Repository
public interface CommentsRepository extends MongoRepository<Comments, String> {
    @Query("{'postId': ?0}")
    List<Comments> findAllByPostId(String postId);
}
