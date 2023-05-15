import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../assets/styles/comments.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);

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

  return (
    <div className="bg">
      <div className="card">
        <h2>Comment Section</h2>

        {/* Display Comments */}
        <ul className="comment-list">
          {comments.map((comment, i) => (
            <li key={comment._id} className="comment">
              <div>{comment.description}</div>
              <h1 hidden>{i + 1}</h1>

              {/* Edit Button */}
              <div className="edit-buttons">
                <Link to={`./edit/${comment._id}`}>
                  Edit
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
