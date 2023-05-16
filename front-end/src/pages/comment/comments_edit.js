import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditCommentPage = () => {
  const { commentId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [updatedComment, setUpdatedComment] = useState("");
  const [originalCommentId, setOriginalCommentId] = useState("");

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const originalId = getOriginalCommentId(commentId);
        setOriginalCommentId(originalId);

        const response = await axios.get(
          `http://localhost:3000/api/comments/get-comment/${originalId}`
        );
        setComment(response.data.description);
        setUpdatedComment(response.data.description);
      } catch (error) {
        console.error("Error fetching comment:", error);
      }
    };

    fetchComment();
  }, [commentId]);

  const getOriginalCommentId = (formattedId) => {
    switch (formattedId) {
      case "0001":
        return "b8cbb7cb";
      case "0002":
        return "c34474e3";
      case "0003":
        return "e28d2a15";
      case "0004":
        return "09869cae";
      case "0005":
        return "4581b0dc";
      case "0006":
        return "64e24a67";
      case "0007":
        return "b8dd76f6";
      case "0008":
        return "dec403cf";
      default:
        return "";
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/comments/update-comment/${originalCommentId}`,
        {
          description: updatedComment,
        }
      );
      navigate("/reviewHome/comments");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/comments/delete-comment/${originalCommentId}`
      );
      navigate("/comments/comments");
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-gray-100 border border-gray-300 rounded">
        <h2 className="text-xl mb-4">Edit/Delete Comment</h2>
        <div className="text-gray-700 mb-4">{comment}</div>
        {/* <div className="text-gray-500 mb-4">
          Original Comment ID: {originalCommentId || "N/A"}
        </div> */}
        <input
          type="text"
          value={updatedComment}
          onChange={(e) => setUpdatedComment(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-400 rounded"
        />
        <button
          onClick={handleUpdate}
          className="w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="w-full bg-gray-700 text-white py-2 px-4 rounded mt-2 hover:bg-gray-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditCommentPage;
