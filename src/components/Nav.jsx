import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../redux";
import { useNavigate } from "react-router-dom";

/**
 * Nav HTML Element
 * @component
 */
function Nav() {
  const isConnected = useSelector((state) => state.authentification);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      isLoggedIn({
        isAuthentificated: false,
        email: null,
        firstname: null,
        lastname: null,
        token: null,
      })
    );
    if (window.localStorage.getItem("user")) {
      window.localStorage.removeItem("user");
    }
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link
          className="main-nav-item"
          to={isConnected.isAuthentificated ? "/profile" : "/Login"}
        >
          <i className="fa fa-user-circle" />
          {isConnected.isAuthentificated
            ? ` ${isConnected.firstname}`
            : " Sign In"}
        </Link>
        {isConnected.isAuthentificated ? (
          <Link className="main-nav-item" to="/" onClick={handleClick}>
            <i className="fa fa-arrow-right-from-bracket" />
            Sign Out
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Nav;
