import React from "react";
import { useUserContext } from "../hooks/useUserContext";

const UserDetails = ({ user }) => {
  const { dispatch } = useUserContext();

  const handleClick = async () => {
    const response = await fetch("/api/sectors/" + user._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  const handleEdit = async () => {
    const response = await fetch("/api/sectors/" + user._id, {
      method: "PATCH",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_USER", payload: json });
    }
  };
  // console.log(user.title);
  return (
    <div className="flex flex-col space-y-5 bg-white my-5 p-4 rounded-lg">
      <h4 className="text-xl text-teal-500 font-bold">{user.name}</h4>
      <div className="flex">
        <span className="flex space-x-3 font-bold mr-3">Sector:</span>
        {/* {user.title} */}
        {user.title.map((item) => (
          <div>
            <p key={item._id}>{item.label}&nbsp; </p>
          </div>
        ))}
      </div>
      <p>{user.createdAt}</p>
      <button onClick={handleClick}>delete</button>
      <button onClick={handleEdit}>edit</button>
    </div>
  );
};

export default UserDetails;
