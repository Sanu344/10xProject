import Signup from "./components/signup/signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import { useState } from "react";
import Layout from "./components/common/layout";

function App() {
  const [status, setStatus] = useState(false);

  async function onclick(e) {
    e.preventDefault();
    setStatus(true);
    console.log(status);
  }

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
//{status === true ? <Signup /> : <Login onclick={onclick} />}
