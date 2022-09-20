import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const isLoggedIn = useSelector((state) => state.authentification);

  console.log(isLoggedIn);
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
        <Link className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle" />
          {isLoggedIn.isAuthentificated
            ? ` ${isLoggedIn.username}`
            : " Sign In"}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
