package com.paf_assignment.flavorfeed.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Document(collection = "Comments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comments {
    @Id
    private String commentID;
    @NotBlank
    private String postId;
    @NotBlank
    private String userId;
    private String description;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date timestamp = new Date();

}
