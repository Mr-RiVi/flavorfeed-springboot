import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../assets/styles/comments.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [nextId, setNextId] = useState(1);

  // Generate the next comment ID
  const generateCommentId = () => {
    const paddedId = String(nextId).padStart(4, "0");
    setNextId(nextId + 1);
    return paddedId;
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
          userId: "1", // Modify this based on your logic
          commentId: commentId,
          description: newComment,
        }
      );

      // Add the new comment to the comments list
      setComments([...comments, response.data]);

      // Clear the input field
      setNewComment("");

      // Navigate to the edit/delete page for the newly created comment
      window.location.href = `/edit-comment/${commentId}`;
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Comment Section</h2>

        {/* Add Comment Form */}
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="comment-input w-full rounded-md p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2"
          >
            Add Comment
          </button>
        </form>

        {/* Display Comments */}
        <ul className="comment-list mt-4 space-y-4">
          {comments.map((comment, index) => (
            <li
              key={comment.commentId}
              className="comment bg-gray-50 hover:bg-gray-100 p-4 rounded-md transition-colors duration-200 ease-in-out"
            >
              <div>{comment.description}</div>
              <div className="text-gray-500 text-sm mt-1">
                Comment ID: {String(index + 1).padStart(4, "0")}
              </div>
              <Link
                to={`/edit-comment/${String(index + 1).padStart(4, "0")}`}
                className="text-blue-500 hover:underline inline-block mt-2"
              >
                <button className="bg-gray-200 hover:bg-gray-300 text-blue-500 font-semibold py-1 px-2 rounded-md">
                  Edit/Delete Comment
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
