import ApiService from "../API";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../redux";
import { useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      const response = new ApiService(data);
      const result = await response.postUserLogin(data);
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          email: data.email,
          token: result.body.token,
          isAuthentificated: true,
        })
      );
      dispatch(
        isLoggedIn({
          isAuthentificated: true,
          username: data.email,
          token: result.body.token,
        })
      );
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" name="email" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Form;
