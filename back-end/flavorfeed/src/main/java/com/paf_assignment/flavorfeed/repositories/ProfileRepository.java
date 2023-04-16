package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf_assignment.flavorfeed.models.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile,String> {
    
}
