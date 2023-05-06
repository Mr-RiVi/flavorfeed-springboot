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

    private String profileDesc;

    private String profileImg;

    private String profileFollow;

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

    public String getProfileDesc() {
        return profileDesc;
    }

    public void setProfileDesc(String profileDesc) {
        this.profileDesc = profileDesc;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public String getProfileFollow() {
        return profileFollow;
    }

    public void setProfileFollow(String profileFollow) {
        this.profileFollow = profileFollow;
    }

    public Profile(String profileName, String profileEmail, String profileContactNo, String profileDesc,
            String profileImg, String profileFollow, String profilePassword) {
        this.profileName = profileName;
        this.profileEmail = profileEmail;
        this.profileContactNo = profileContactNo;
        this.profileDesc = profileDesc;
        this.profileImg = profileImg;
        this.profileFollow = profileFollow;
        this.profilePassword = profilePassword;
    }

    

   

    

    
}
