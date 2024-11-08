import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logout from "../Auth/Logout";

let NavBar = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          {/* <Link
            to={"/"}
            className="navbar-brand text-info"
            style={{ color: "red" }}
          >
            Nav
            <span
              // className="text-primary"
              style={{ color: "#008ae6" }}
            >
              -IC
            </span>
          </Link> */}

          {loggedIn == false && (
            <>
              <Link
                to={"/"}
                className="navbar-brand text-info"
                style={{ color: "red" }}
              >
                Nav
                <span
                  // className="text-primary"
                  style={{ color: "#008ae6" }}
                >
                  -IC
                </span>
              </Link>
            </>
          )}

          {loggedIn == true && (
            <>
              <Link
                to={"/pg/list"}
                className="navbar-brand text-info"
                style={{ color: "red" }}
              >
                Nav
                <span
                  // className="text-primary"
                  style={{ color: "#008ae6" }}
                >
                  -IC
                </span>
              </Link>
            </>
          )}

          <Link
            to={"/"}
            className="navbar-brand text-info"
            style={{ color: "red" }}
          >
            Nav
            <span
              // className="text-primary"
              style={{ color: "#008ae6" }}
            >
              -IC
            </span>
          </Link>

          <span>
            {loggedIn == false && (
              <>
                <Link
                  to="/Register"
                  style={{
                    color: "white",
                    backgroundColor: "#008ae6",
                    fontWeight: "600",
                    // border: "1.4px solid blue",
                    borderRadius: "24px",
                    padding: "1vh 3vh",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Register
                </Link>
              </>
            )}
            {loggedIn == false && (
              <>
                <Link
                  to="/Login"
                  style={{
                    color: "white",
                    backgroundColor: "#008ae6",
                    fontWeight: "600",
                    // border: "1.4px solid blue",
                    borderRadius: "24px",
                    padding: "1vh 3vh",
                    textDecoration: "none",
                    marginLeft: "20px",
                  }}
                >
                  Login
                </Link>
              </>
            )}
            {loggedIn == true && (
              <>
                <Logout />
              </>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
