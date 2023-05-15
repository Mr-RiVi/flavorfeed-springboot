package com.paf_assignment.flavorfeed.controllers;

import com.paf_assignment.flavorfeed.models.Comments;
import com.paf_assignment.flavorfeed.models.request.CommentRequest;
import com.paf_assignment.flavorfeed.services.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/comments")
public class CommentController {

    @Autowired
    private CommentsService service;

    /**
     * @param comments
     * @return comment obj
     */
  
    @PostMapping("/create")
    public Comments createComments(@RequestBody CommentRequest comments) {
        return service.addComments(comments);
    }

    /**
     * @return List<comment>
     */
    @GetMapping("/get-all/{postId}")
    public List<Comments> getCommentsByPostId(@PathVariable("postId") String postId) {
        return service.findCommentsByPost(postId);
    }

    /**
     * @param commentId
     * @return comment obj
     */
    @GetMapping("/get-by-commentId/{commentId}")
    public Comments getComments(@PathVariable("commentId") String commentId) {
        return service.getCommentByCommentID(commentId);
    }

    /**
     * @param commentId
     * @return comment obj
     */

    @PutMapping("/update-comment/{commentId}")
    public Comments modifyComments(@PathVariable("commentId") String commentId, @RequestBody CommentRequest request) {
        return service.updateComments(commentId, request);
    }

    /**
     * @param commentId
     * @return string
     */
    @DeleteMapping("delete-comment/{commentId}")
    public String deleteComment(@PathVariable("commentId") String commentId) {
        return service.deleteComment(commentId);
    }

}
