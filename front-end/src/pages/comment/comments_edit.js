// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// import "../../assets/styles/comments.css";

// const CommentEdit = () => {
//   const { commentId } = useParams();
//   const navigate = useNavigate();

//   const [comment, setComment] = useState(null);
//   const [updatedComment, setUpdatedComment] = useState("");

//   // Fetch the comment to be edited
//   useEffect(() => {
//     const fetchComment = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/api/comments/get-comment/${commentId}`
//         );
//         setComment(response.data);
//         setUpdatedComment(response.data.description);
//       } catch (error) {
//         console.error("Error fetching comment:", error);
//       }
//     };

//     fetchComment();
//   }, [commentId]);

//   // Handle comment update
//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/comments/update-comment/${commentId}`,
//         {
//           description: updatedComment,
//         }
//       );

//       // Redirect to the main comments page
//       navigate("/comments");
//     } catch (error) {
//       console.error("Error updating comment:", error);
//     }
//   };

//   // Handle comment deletion
//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:3000/api/comments/delete-comment/${commentId}`
//       );

//       // Redirect to the main comments page
//       navigate("/comments");
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   if (!comment) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg">
//       <div className="card">
//         <h2>Edit Comment</h2>

//         <div className="comment">
//           <input
//             type="text"
//             className="edit-input"
//             value={updatedComment}
//             onChange={(e) => setUpdatedComment(e.target.value)}
//           />
//           <button onClick={handleUpdate}>Save</button>
//         </div>

//         <div className="delete-buttons">
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentEdit;
