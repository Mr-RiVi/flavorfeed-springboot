package com.paf_assignment.flavorfeed.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.Optional;
import java.util.NoSuchElementException;

import com.paf_assignment.flavorfeed.services.AdminService;
import com.paf_assignment.flavorfeed.models.AdminProfile;
import com.paf_assignment.flavorfeed.models.Profile;
import com.paf_assignment.flavorfeed.services.ProfileService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private ProfileService profileService;

    @PostMapping("/create")
    public ResponseEntity<String> createAdminProfile(@RequestBody AdminProfile profile) {
        try {
            adminService.createAdminProfile(profile);
            return new ResponseEntity<>("Profile created", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create admin profile", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/all-admin-profiles")
    public ResponseEntity<List<AdminProfile>> getAllAdminProfiles(){
        List<AdminProfile> adminAccounts = adminService.getAllAdminProfiles();
        return new ResponseEntity<>(adminAccounts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminProfile> retrieveAdminProfileById(@PathVariable String id) {
        Optional<AdminProfile> profile = adminService.getProfileById(id);
        if(profile.isPresent()){
            return new ResponseEntity<>(profile.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AdminProfile> updateProfile(@PathVariable String id, @RequestBody AdminProfile updatedProfileData) {
        Optional<AdminProfile> existingProfile = adminService.getProfileById(id);
        if (existingProfile.isPresent()) {
            AdminProfile existingProfiletData = existingProfile.get();
            existingProfiletData.setFullName(updatedProfileData.getFullName()); 
            existingProfiletData.setEmail(updatedProfileData.getEmail());
            existingProfiletData.setContactNo(updatedProfileData.getContactNo()); 
            existingProfiletData.setPassword(updatedProfileData.getPassword()); 
            AdminProfile updatedProfile = adminService.updateProfile(id, existingProfiletData);
            return new ResponseEntity<>(updatedProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteAdminProfile(@PathVariable String id) {
        try {
            adminService.deleteProfile(id);
            return new ResponseEntity<>("remove account",HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("deletion unsuccessfull",HttpStatus.NOT_FOUND);
        }
    }

    /*This method maps the GET request to retrieve all user profiles. It returns a list of all profiles in the database. */
    @GetMapping("/all-users")
    public ResponseEntity<List<Profile>> retrieveAllUserProfiles(){
        List<Profile> profile = profileService.getAllProfiles();
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    /*This method maps the GET request to retrieve a user profile by ID. It accepts the ID of the profile as a path variable and returns the corresponding profile, if found. */
    @GetMapping("users/{id}")
    public ResponseEntity<Profile> retrieveUserProfileById(@PathVariable String id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        if(profile.isPresent()){
            return new ResponseEntity<>(profile.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    /*This method maps the PUT request to update an existing user profile.It accepts the ID of the profile to be updated as a path variable and the updated profile data as JSON in the request body.
    It returns the updated profile, if found and updated successfully. */
    @PutMapping("/modify/{id}")
    public ResponseEntity<Profile> modifyUserProfile(@PathVariable String id, @RequestBody Profile updatedProfileData) {
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
    @DeleteMapping("remove/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable String id) {
        try {
            profileService.deleteProfile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
