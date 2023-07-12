import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please Register</h2>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="LastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(register));
              navigate("/profil");
            }}
          >
            Register
          </button>

          <h5>
            u already have account <Link to="/login">sign in </Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Register;
