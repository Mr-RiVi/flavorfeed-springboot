package com.paf_assignment.flavorfeed.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// import jakarta.annotation.sql.DataSourceDefinition;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collation = "Comments")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Comments {
    @Id
    private String commentID;
    private String discription;
    private String date;

}
