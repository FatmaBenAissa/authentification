import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";

function Profil() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hello {user?.name}</h1>

      <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
