import ApiService from "../API";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";

function Panel() {
  const isLoggedIn = useSelector((state) => state.authentification);

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
      e.target.textContent = "Cancel";
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
      const token = JSON.parse(window.localStorage.getItem("user"));
      const response = new ApiService(data);
      const result = await response.putUserProfile(token.token);
      console.log(result);
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
          {isLoggedIn.username}
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
        amount="$2,082.79"
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Checking (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default Panel;
