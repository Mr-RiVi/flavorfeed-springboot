package com.paf_assignment.flavorfeed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf_assignment.flavorfeed.models.AdminProfile;

@Repository
public interface AdminRepository extends MongoRepository<AdminProfile,String>{
    
}
