import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../assets/styles/comments.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

  // Generate a unique ID for each comment
  const generateCommentId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Fetch all comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/comments/get-all/1"
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const commentId = generateCommentId();

      const response = await axios.post(
        "http://localhost:3000/api/comments/create",
        {
          postId: "1", // Modify this based on your logic
          userId: "user_id", // Modify this based on your logic
          commentId: commentId,
          description: newComment,
        }
      );

      // Add the new comment to the comments list
      setComments([...comments, response.data]);

      // Clear the input field
      setNewComment("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  // Handle comment update
  const handleUpdate = async (commentId, updatedComment) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/comments/update-comment/${commentId}`,
        {
          description: updatedComment,
        }
      );

      // Update the comment in the comments list
      const updatedComments = comments.map((comment) => {
        if (comment.commentId === commentId) {
          return {
            ...comment,
            description: response.data.description,
          };
        }
        return comment;
      });
      setComments(updatedComments);

      // Clear the editing state
      setEditingCommentId(null);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  // Handle comment deletion
  const handleDelete = async (commentId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/comments/delete-comment/${commentId}`
      );

      // Remove the comment from the comments list
      const updatedComments = comments.filter(
        (comment) => comment.commentId !== commentId
      );
      setComments(updatedComments);

      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="bg">
      <div className="card">
        <h2>Comment Section</h2>

        {/* Add Comment Form */}
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="comment-input"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            required
          />
          <button type="submit">Add Comment</button>
        </form>

        {/* Display Comments */}
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.commentId} className="comment">
              {editingCommentId === comment.commentId ? (
                <div>
                  <input
                    type="text"
                    className="edit-input"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    onClick={() => handleUpdate(comment.commentId, newComment)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>{comment.description}</div>
              )}

              {/* Edit and Delete Buttons */}
              <div className="edit-delete-container">
                <div className="edit-buttons">
                  <button
                    onClick={() => setEditingCommentId(comment.commentId)}
                  >
                    Edit
                  </button>
                </div>
                <div className="delete-buttons" style={{ paddingLeft: "10px" }}>
                  <button onClick={() => handleDelete(comment.commentId)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
