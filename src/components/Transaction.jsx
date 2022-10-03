import PropTypes from "prop-types";

/**
 * @param {String} title - The title of the transaction
 * @param {Number} amount - The amount of the transaction as integer
 * @param {String} description - The description of the transaction
 * @component
 */
function Transaction({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount.toLocaleString("en-US")}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

Transaction.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Transaction;
