import ApiService from "../API";
import Transaction from "./Transaction";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../redux";

function Panel() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.authentification);

  function handleClick(e) {
    const form = document.getElementById("form-info");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");

    form.classList.toggle("disabled");

    firstname.toggleAttribute("disabled");
    lastname.toggleAttribute("disabled");

    if (form.classList.contains("disabled")) {
      e.target.textContent = "Edit Name";
    } else {
      e.target.textContent = "Done";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      firstName: form.get("firstname"),
      lastName: form.get("lastname"),
    };

    try {
      const response = new ApiService(data);
      const result = await response.putUserProfile(isConnected.token);
      dispatch(
        isLoggedIn({
          isAuthentificated: isConnected.isAuthentificated,
          email: isConnected.emal,
          firstname: result.body.firstName,
          lastname: result.body.lastName,
          token: isConnected.token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${isConnected.firstname} ${isConnected.lastname}`}
        </h1>
        <form id="form-info" className="disabled" onSubmit={handleSubmit}>
          <input id="firstname" name="firstname" type="text" disabled={true} />
          <input id="lastname" name="lastname" type="text" disabled={true} />
          <button className="edit-button" type="submit">
            Save
          </button>
        </form>
        <button className="edit-button" onClick={handleClick}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction
        title="Argent Bank Checking (x8349)"
        amount={2082.79}
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Savings (x6712)"
        amount={10928.42}
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Checking (x8349)"
        amount={184.3}
        description="Current Balance"
      />
    </main>
  );
}

export default Panel;
