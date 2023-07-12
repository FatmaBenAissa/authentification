import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />

          <label class="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              setTimeout(() => {
                dispatch(userlogin(login));
                navigate("/profil");
              }, 1000);
            }}
          >
            login
          </button>
          <h5>
            u already have account <Link to="/register">Register now</Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;
