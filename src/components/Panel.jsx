import Transaction from "./Transaction";

function Panel() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
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
