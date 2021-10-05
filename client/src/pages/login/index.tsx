import React, { useState } from "react";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { LoginContainer, LoginLogo, LoginForm } from "./styles";
import { Authentication } from "../../services/authentication";
import Register from "../register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEyeClick = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };

  const clearFields = (): void => {
    setEmail("");
    setPassword("");
  };

  const incompleteFields = (): void => {
    alert("Incorrect email or password.");
    clearFields();
  };

  const authenticationSucceeded = (token: string): void => {
    localStorage.setItem("token", token);
    alert("Authentication succeeded!");
    // router.push("/home");
  };

  const authenticationFailed = (): void => {
    alert("Authentication failed! Verify email and password.");
    clearFields();
    // router.push("/login");
  };

  const handleLogin = async () => {
    if (email === "" || password === "") {
      incompleteFields();
      return;
    }

    try {
      const token: string = await Authentication.logIn({
        email,
        password,
      });
      if (token) {
        authenticationSucceeded(token);
      } else {
        authenticationFailed();
      }
    } catch (err) {
      authenticationFailed();
    }
  };

  const handleRegister = () => {
    return <Register />;
  };

  return (
    <LoginContainer>
      <LoginLogo>
        <img
          src="https://www.pngkey.com/png/full/38-387826_geek-fam-dota-2.png"
          alt="Login App"
        />
      </LoginLogo>
      <LoginForm>
        <h1>Geek List</h1>
        <div className="login-input-email">
          <MdEmail />
          <input
            type="text"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-password">
          <MdLock />
          <input
            type={show ? "text" : "password"}
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-input-password-eye">
            {show ? (
              <HiEye size={20} onClick={handleEyeClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleEyeClick} />
            )}
          </div>
        </div>
        <button type="submit" onClick={handleLogin}>
          Sign in
        </button>
        <h4>Not registered yet?</h4>
        <button type="submit" onClick={handleRegister}>
          Sign up
        </button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
