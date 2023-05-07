import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../assets/styles/comments.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

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
      const response = await axios.post(
        "http://localhost:3000/api/comments/create",
        {
          postId: "1", // Modify this based on your logic
          userId: "user_id", // Modify this based on your logic
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
        if (comment._id === commentId) {
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
        (comment) => comment._id !== commentId
      );
      setComments(updatedComments);
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
            <li key={comment._id} className="comment">
              {editingCommentId === comment._id ? (
                <div>
                  <input
                    type="text"
                    className="edit-input"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(comment._id, newComment)}>
                    Save
                  </button>
                </div>
              ) : (
                <div>{comment.description}</div>
              )}

        
              {/* Edit and Delete Buttons */}
              <div className="edit-delete-container">
                <div className="edit-buttons">
                  <button onClick={() => setEditingCommentId(comment._id)}>
                    Edit
                  </button>
                </div>
                
                <div className="delete-buttons" style={{ paddingLeft: "10px" }}>
                  <button onClick={() => handleDelete(comment._id)}>
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
