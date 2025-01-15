import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  // calling only at inital render
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userRes = await axios.get("https://jsonplaceholder.typicode.com/users");
        // console.log(userRes)
        
        setUsers(userRes?.data)
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      {
        users && <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item)=>(
                <>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td className="p-2">
                        <Link to={`/view/${item.id}`} className="btn btn-success ">View All Posts</Link>
                    </td>
                </tr>
                
                </>
            ))
          }
        </tbody>
      </table>
      }
    </>
  );
};

export default Profile;
