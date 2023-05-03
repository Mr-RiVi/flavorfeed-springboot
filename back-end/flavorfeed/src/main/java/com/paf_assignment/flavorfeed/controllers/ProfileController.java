package com.paf_assignment.flavorfeed.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.services.ProfileService;

/*This class represents the controller for the user profile. It handles incoming HTTP requests and delegates the processing to the ProfileService.
*/
@RestController
@RequestMapping("api/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    /*This method maps the POST request to create a new user profile. It accepts the request body containing the profile data as JSON and returns the created profile. */
    @PostMapping("/create")
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile){
        Profile createdProfile = profileService.createProfile(profile);
        return new ResponseEntity<>(createdProfile, HttpStatus.OK);
    }
    
    /*This method maps the GET request to retrieve all user profiles. It returns a list of all profiles in the database. */
    @GetMapping("/list")
    public ResponseEntity<List<Profile>> getAllProfiles(){
        List<Profile> profile = profileService.getAllProfiles();
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    /*This method maps the GET request to retrieve a user profile by ID. It accepts the ID of the profile as a path variable and returns the corresponding profile, if found. */
    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable String id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        if(profile.isPresent()){
            return new ResponseEntity<>(profile.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    /*This method maps the PUT request to update an existing user profile.It accepts the ID of the profile to be updated as a path variable and the updated profile data as JSON in the request body.
    It returns the updated profile, if found and updated successfully. */
    @PutMapping("/update/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable String id, @RequestBody Profile updatedProfileData) {
        Optional<Profile> existingProfile = profileService.getProfileById(id);
        if (existingProfile.isPresent()) {
            Profile existingProfiletData = existingProfile.get();
            existingProfiletData.setProfileName(updatedProfileData.getProfileName());
            existingProfiletData.setProfileEmail(updatedProfileData.getProfileEmail());
            existingProfiletData.setProfileContactNo(updatedProfileData.getProfileContactNo());
            existingProfiletData.setProfilePassword(updatedProfileData.getProfilePassword());
            Profile updatedProfile = profileService.updateProfile(id, existingProfiletData);
            return new ResponseEntity<>(updatedProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    /*This method maps the DELETE request to delete an existing user profile.It accepts the ID of the profile to be deleted as a path variable and returns a success response.
    If the profile with the specified ID is not found, it returns a not found response */
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
        try {
            profileService.deleteProfile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
}
