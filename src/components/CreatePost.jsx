import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  // Homeディレクトリへ遷移
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      username: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      timestamp: serverTimestamp(),
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post</h1>
        <div className="inputPost">
          <div className="title">Title</div>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div className="title">Content</div>
          <textarea
            placeholder="What is happening?!"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
