package com.paf_assignment.flavorfeed.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import com.paf_assignment.flavorfeed.models.AdminProfile;
import com.paf_assignment.flavorfeed.repositories.AdminRepository;


@Service
public class AdminService {

    @Autowired 
    private AdminRepository adminRepository;

    //register new admin
    public AdminProfile createAdminProfile(AdminProfile profile) {
        return adminRepository.save(profile);
    }

    //retrieve all admin accounts
    public List<AdminProfile> getAllAdminProfiles(){
        return adminRepository.findAll();
    }

    //get admin accounts using id
    public Optional<AdminProfile> getProfileById(String id){
        return adminRepository.findById(id);
    }
    
    //update service
    public AdminProfile updateProfile(String id, AdminProfile profile) {
        Optional<AdminProfile> optionalProfile = adminRepository.findById(id);

        if (optionalProfile.isPresent()) {
            AdminProfile existingProfile = optionalProfile.get();
            existingProfile.setFullName(profile.getFullName()); 
            existingProfile.setEmail(profile.getEmail());
            existingProfile.setContactNo(profile.getContactNo()); 
            existingProfile.setPassword(profile.getPassword()); 
            return adminRepository.save(existingProfile); 
        } else {

             // if the profile does not exist, throw an exception with the 404 status code
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }

    public void deleteProfile(String id) {
        Optional<AdminProfile> optionalProfile = adminRepository.findById(id);

        if (optionalProfile.isPresent()) { // check if the profile exists in the repository
            adminRepository.delete(optionalProfile.get()); // delete the profile object
        } else {

            // if the profile does not exist, throw an exception with the 404 status code
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found");
        }
    }
}
