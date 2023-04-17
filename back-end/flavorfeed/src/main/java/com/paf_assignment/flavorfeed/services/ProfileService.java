package com.paf_assignment.flavorfeed.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.repositories.ProfileRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile createProfile(Profile profile){
        return profileRepository.save(profile);
    }

    public List<Profile> getAllProfiles(){
        return profileRepository.findAll();
    }

    public Optional<Profile> getProfileById(String id){
        return profileRepository.findById(id);
    }
    
}
