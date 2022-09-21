import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux";
import { useNavigate } from "react-router-dom";

function Nav() {
  const isLoggedIn = useSelector((state) => state.authentification);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(signOut());
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
          to={isLoggedIn.isAuthentificated ? "/profile" : "/signin"}
        >
          <i className="fa fa-user-circle" />
          {isLoggedIn.isAuthentificated
            ? ` ${isLoggedIn.username}`
            : " Sign In"}
        </Link>
        {isLoggedIn.isAuthentificated ? (
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
