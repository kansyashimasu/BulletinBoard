import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilePen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>

      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          Login
        </Link>
      ) : (
        <>
          <Link to="/createPost">
            <FontAwesomeIcon icon={faFilePen} />
            Post
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faRightToBracket} />
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

// fontawesomeを使う
