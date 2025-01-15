import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getPostData = async () => {
      try {
        
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        setPosts(postRes.data);
        console.log(postRes.data);

        const userInfo = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(userInfo.data);

        // const commentRes = await axios.get(`https://dummyjson.com/comment/${id}`)
      } catch (error) {
        console.error(error);
      }
    };

    getPostData();
  }, []);


  const handleDelete = async(id)=>{
    try {
      const deleteItem = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      alert("deleted success")
      console.log(deleteItem)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            
          </tr>
        </thead>
        <tbody>
         
          {
            posts.map((item)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <Link to={`/post/${item.id}`}  className="btn btn-primary">View Post</Link>
                  <button onClick={()=>handleDelete(item.id)} className="btn btn-danger ml-5">Delete</button>

                </td>
              </tr>
            ))

           
          }
        </tbody>
      </table>
    </>
  );
};

export default UserProfile;
