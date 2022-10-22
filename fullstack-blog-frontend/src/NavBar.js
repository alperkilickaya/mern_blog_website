import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const signOutHandler = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        {user ? (
          <button onClick={signOutHandler}>LOG OUT</button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            LOG IN
          </button>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
