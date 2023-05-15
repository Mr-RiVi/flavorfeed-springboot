package com.paf_assignment.flavorfeed.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "adminprofiles")
public class AdminProfile {
    @Id
    private String profileId;

    private String fullName;

    private String username;
    
    private String email;
    
    private String contactNo;
    
    private String password;
    
    public AdminProfile(String fullName, String username,String email, String contactNo, String password) {
        this.fullName = fullName;
        this.username=username;
        this.email = email;
        this.contactNo = contactNo;
        this.password = password;
    }

//setters
    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }
    
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //getters
    public String getProfileId() {
        return profileId;
    }

    public String getFullName() {
        return fullName;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }


    public String getContactNo() {
        return contactNo;
    }


    public String getPassword() {
        return password;
    }
}
