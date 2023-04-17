package com.paf_assignment.flavorfeed.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.services.ProfileService;

@RestController
@RequestMapping("api/profile")
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
    
}
