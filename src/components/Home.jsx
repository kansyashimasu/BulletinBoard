import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    // firestoreからデータを取得
    const data = collection(db, "posts");
    const q = query(data, orderBy("timestamp", "desc"));
    getDocs(q).then((snapshot) => {
      setPostList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="homepage">
      {postList.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <div className="name">
            <h3>@{post.username}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

// ログインしていないのに記事が書けるバグを修正
