package com.paf_assignment.flavorfeed.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "profiles")
public class Profile {
    
    @Id
    private String profileId;

    private String profileName;

    private String profileEmail;

    private String profileContactNo;

    private String profilePassword;

    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public String getProfileEmail() {
        return profileEmail;
    }

    public void setProfileEmail(String profileEmail) {
        this.profileEmail = profileEmail;
    }

    public String getProfileContactNo() {
        return profileContactNo;
    }

    public void setProfileContactNo(String profileContactNo) {
        this.profileContactNo = profileContactNo;
    }

    public String getProfilePassword() {
        return profilePassword;
    }

    public void setProfilePassword(String profilePassword) {
        this.profilePassword = profilePassword;
    }

    public Profile(String profileName, String profileEmail, String profileContactNo, String profilePassword) {
        this.profileName = profileName;
        this.profileEmail = profileEmail;
        this.profileContactNo = profileContactNo;
        this.profilePassword = profilePassword;
    }

   

    

    
}
