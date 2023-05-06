package com.paf_assignment.flavorfeed.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.models.Profile.Review;
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

    public Profile updateProfile(String id, Profile profile) {
        Optional<Profile> optionalProfile = profileRepository.findById(id);

        if (optionalProfile.isPresent()) { 
            Profile existingProfile = optionalProfile.get(); 
            existingProfile.setProfileName(profile.getProfileName()); 
            existingProfile.setProfileEmail(profile.getProfileEmail()); 
            existingProfile.setProfileContactNo(profile.getProfileContactNo()); 
            existingProfile.setProfilePassword(profile.getProfilePassword()); 
            return profileRepository.save(existingProfile); 
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }

    public void deleteProfile(String id) {
        Optional<Profile> optionalProfile = profileRepository.findById(id);

        if (optionalProfile.isPresent()) { 
            profileRepository.delete(optionalProfile.get()); 
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }


    // add review
    public Review createReview(String profileId, Review review) {
        Optional<Profile> optionalProfile = profileRepository.findById(profileId);
    
        if (optionalProfile.isPresent()) {
            Profile profile = optionalProfile.get();
            profile.getReviews().add(review);
            profileRepository.save(profile);
            return review;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }

    // get all reviews
    public List<Review> getAllReviews(String profileId) {
        Optional<Profile> optionalProfile = profileRepository.findById(profileId);

        if (optionalProfile.isPresent()) {
            Profile profile = optionalProfile.get();
            return profile.getReviews();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }

    // get one review
    public Review getReviewById(String profileId, String reviewId) {
        Optional<Profile> optionalProfile = profileRepository.findById(profileId);

        if (optionalProfile.isPresent()) {
            Profile profile = optionalProfile.get();
            Optional<Review> optionalReview = profile.getReviews()
                    .stream()
                    .filter(r -> r.getReviewId().equals(reviewId))
                    .findFirst();
            if (optionalReview.isPresent()) {
                return optionalReview.get();
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }
    

    // update
    public Review updateReview(String profileId, String reviewId, Review updatedReview) {
        Optional<Profile> optionalProfile = profileRepository.findById(profileId);

        if (optionalProfile.isPresent()) {
            Profile profile = optionalProfile.get();
            List<Review> reviews = profile.getReviews();
            Optional<Review> optionalReview = reviews.stream()
                                                    .filter(r -> r.getReviewId().equals(reviewId))
                                                    .findFirst();
            if (optionalReview.isPresent()) {
                Review existingReview = optionalReview.get();
                existingReview.setReviewImg(updatedReview.getReviewImg());
                existingReview.setReviewerName(updatedReview.getReviewerName());
                existingReview.setReviewDate(updatedReview.getReviewDate());
                existingReview.setReviewTitle(updatedReview.getReviewTitle());
                existingReview.setReviewLocation(updatedReview.getReviewLocation());
                existingReview.setReviewDescription(updatedReview.getReviewDescription());
                existingReview.setReviewLikeCount(updatedReview.getReviewLikeCount());
                existingReview.setReviewRate(updatedReview.getReviewRate());
                profileRepository.save(profile);
                return existingReview;
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }


    // delete review
    public void deleteReview(String profileId, String reviewId) {
        Optional<Profile> optionalProfile = profileRepository.findById(profileId);

        if (optionalProfile.isPresent()) {
            Profile profile = optionalProfile.get();
            List<Review> reviews = profile.getReviews();
            reviews.removeIf(review -> review.getReviewId().equals(reviewId));
            profile.setReviews(reviews);
            profileRepository.save(profile);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }

    // all reviewes
    public List<Review> getAllReviews() {
        List<Profile> profiles = profileRepository.findAll();
        List<Review> reviews = new ArrayList<>();
    
        for (Profile profile : profiles) {
            reviews.addAll(profile.getReviews());
        }
    
        return reviews;
    }
     
}
