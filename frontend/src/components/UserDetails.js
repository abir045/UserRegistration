import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import Edituser from "./EditUser";

const UserDetails = ({ user }) => {
  //invoking dispatch from  the global state

  const { dispatch } = useUserContext();

  const handleDelete = async () => {
    const response = await fetch("/api/sectors/" + user._id, {
      method: "DELETE",
    });
    const json = await response.json();

    // dispatching delete_user action to reducer to get the payload of user id from async handleclick function

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  // const handleEdit = async () => {
  //   const response = await fetch("/api/sectors/" + user._id, {
  //     method: "PATCH",
  //   });
  //   const json = await response.json();

  //   if (response.ok) {
  //     dispatch({ type: "UPDATE_USER", payload: json });
  //   }
  //   console.log(user.name);
  // };

  return (
    <div className="flex flex-col space-y-5 bg-white my-5 p-4 rounded-lg">
      <h4 className="text-xl text-teal-500 font-bold">{user.name}</h4>
      <div className="flex">
        <span className="flex space-x-3 font-bold mr-3">Sector:</span>
        {/* {user.title} */}
        {/* mapping through title array */}
        {user.title.map((item) => (
          <div className="flex">
            <p key={item._id}>{item.label}&nbsp; </p>
          </div>
        ))}
      </div>
      <p>{user.createdAt}</p>
      <button onClick={handleDelete}>delete</button>
      <Link to={`/edit/${user._id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default UserDetails;
