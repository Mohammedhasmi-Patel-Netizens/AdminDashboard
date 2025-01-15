import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userLogo from "../assets/download (2).jpeg";
import useToggle from "../hook/useToggle";

const PostDetails = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

//   const [toggle, handleToggle] = useToggle();
        const [toggle, setToggle] = useState(false);


  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const postRes = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const userId = postRes?.data?.userId;
      const userInfo = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const commentsData = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      setComments(commentsData?.data);

      setUser(userInfo.data);
      setPosts(postRes.data);
    };
    getData();
  }, []);

  return (
    

    <div className="card p-3 mb-3">
    {user && (
      <>
        <div className="d-flex align-items-center mb-3">
          <div className="d-flex align-items-center me-3">
            <img
              className="rounded-circle me-2"
              src={userLogo}
              alt={user.username}
              style={{ width: "50px", height: "50px" }}
            />
            <h5 className="mb-0 ml-5">{user.username}</h5>
          </div>
        </div>
  
        <div className="mb-3">
          <h4 className="mb-2">{posts.title}</h4>
          <p className="mb-0">{posts.body}</p>
        </div>
      </>
    )}
  
    <div className="mt-3">
      <button
        onClick={()=>setToggle(!toggle)}
        className="btn btn-outline-success btn-sm"
        style={{ cursor: "pointer" }}
      >
        {toggle ? "Hide All Comments" : "See All Comments"}
      </button>
      <ul className={`${toggle ? "d-block" : "d-none"} list-unstyled mt-3`}>
        {comments.map((item, index) => (
          <li key={index} className="mb-2 p-2 bg-light rounded">
            <small>{item.body}</small>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default PostDetails;
