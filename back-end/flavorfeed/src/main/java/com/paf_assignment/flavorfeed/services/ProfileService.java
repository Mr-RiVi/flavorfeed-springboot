package com.paf_assignment.flavorfeed.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.repositories.ProfileRepository;

@Service
public class ProfileService {

    
    @Autowired // dependency injection of ProfileRepository bean
    private ProfileRepository profileRepository;

    // method to create a profile object and save it in the repository
    public Profile createProfile(Profile profile){
        return profileRepository.save(profile);
    }

    // method to retrieve all profiles stored in the repository
    public List<Profile> getAllProfiles(){
        return profileRepository.findAll();
    }

    // method to retrieve a profile object from the repository based on the given id
    public Optional<Profile> getProfileById(String id){
        return profileRepository.findById(id);
    }

    // method to update an existing profile object in the repository based on the given id
    public Profile updateProfile(String id, Profile profile) {
        Optional<Profile> optionalProfile = profileRepository.findById(id);

        if (optionalProfile.isPresent()) { // check if the profile exists in the repository
            Profile existingProfile = optionalProfile.get(); // get the existing profile object
            existingProfile.setProfileName(profile.getProfileName()); // update its name
            existingProfile.setProfileEmail(profile.getProfileEmail()); // update its email
            existingProfile.setProfileContactNo(profile.getProfileContactNo());
            existingProfile.setProfileDesc(profile.getProfileDesc());
            existingProfile.setProfileImg(profile.getProfileImg());
            existingProfile.setProfileFollow(profile.getProfileFollow()); // update its contact number
            existingProfile.setProfilePassword(profile.getProfilePassword()); // update its address
            return profileRepository.save(existingProfile); // save the updated profile object
        } else {

             // if the profile does not exist, throw an exception with the 404 status code
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }

    // method to delete an existing profile object from the repository based on the given id
    public void deleteProfile(String id) {
        Optional<Profile> optionalProfile = profileRepository.findById(id);

        if (optionalProfile.isPresent()) { // check if the profile exists in the repository
            profileRepository.delete(optionalProfile.get()); // delete the profile object
        } else {

            // if the profile does not exist, throw an exception with the 404 status code
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }
    
}
