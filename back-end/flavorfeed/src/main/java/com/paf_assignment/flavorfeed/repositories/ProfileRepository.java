package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf_assignment.flavorfeed.models.Profile;

public interface ProfileRepository extends MongoRepository<Profile,String> {
    
}
