import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../redux";

import Nav from "../components/Nav";
import Panel from "../components/Panel";
import Footer from "../components/Footer";

function Dashboard() {
  const navigate = useNavigate();
  const isLoggedIn = store.getState().authentification.isAuthentificated;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <>
      <Nav />
      <Panel />
      <Footer />
    </>
  );
}

export default Dashboard;
