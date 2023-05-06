package com.paf_assignment.flavorfeed.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.models.Profile.Review;
import com.paf_assignment.flavorfeed.services.ProfileService;

@RestController
@RequestMapping("api/profile")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/create")
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile){
        Profile createdProfile = profileService.createProfile(profile);
        return new ResponseEntity<>(createdProfile, HttpStatus.OK);
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<Profile>> getAllProfiles(){
        List<Profile> profile = profileService.getAllProfiles();
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable String id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        if(profile.isPresent()){
            return new ResponseEntity<>(profile.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable String id, @RequestBody Profile updatedProfileData) {
        Optional<Profile> existingProfile = profileService.getProfileById(id);
        if (existingProfile.isPresent()) {
            Profile existingProfiletData = existingProfile.get();
            existingProfiletData.setProfileName(updatedProfileData.getProfileName());
            existingProfiletData.setProfileEmail(updatedProfileData.getProfileEmail());
            existingProfiletData.setProfileContactNo(updatedProfileData.getProfileContactNo());
            existingProfiletData.setProfileDesc(updatedProfileData.getProfileDesc());
            existingProfiletData.setProfileImg(updatedProfileData.getProfileImg());
            existingProfiletData.setProfileFollow(updatedProfileData.getProfileFollow());
            existingProfiletData.setProfilePassword(updatedProfileData.getProfilePassword());
            Profile updatedProfile = profileService.updateProfile(id, existingProfiletData);
            return new ResponseEntity<>(updatedProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
        try {
            profileService.deleteProfile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    //create review
    @PostMapping("/review/create/{profileId}")
    public ResponseEntity<Review> addReview(@PathVariable String profileId, @RequestBody Review review) {
        Review createdReview = profileService.createReview(profileId, review);
        return new ResponseEntity<>(createdReview, HttpStatus.OK);
    }

    //review list 
    @GetMapping("/{profileId}/reviews/list")
    public ResponseEntity<List<Review>> getAllReviews(@PathVariable String profileId){
        List<Review> reviews = profileService.getAllReviews(profileId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    //get one review
    @GetMapping("/review/{profileId}/{reviewId}")
    public ResponseEntity<Review> getOneReview(@PathVariable String profileId, @PathVariable String reviewId) {
        Review review = profileService.getReviewById(profileId, reviewId);
        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    //update review
    @PutMapping("/review/update/{profileId}/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable String profileId, @PathVariable String reviewId, @RequestBody Review updatedReviewData) {
        try {
            Review updatedReview = profileService.updateReview(profileId, reviewId, updatedReviewData);
            return new ResponseEntity<>(updatedReview, HttpStatus.OK);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //delete review
    @DeleteMapping("/review/delete/{profileId}/{reviewId}")
    public ResponseEntity<Void> deleteReview(@PathVariable String profileId, @PathVariable String reviewId) {
        try {
            profileService.deleteReview(profileId, reviewId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // all reviews
    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = profileService.getAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }


}
