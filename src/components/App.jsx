import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Contacts from "../pages/Contacts/Contacts";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
