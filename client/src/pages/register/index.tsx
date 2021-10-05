import React, { useState } from "react";

import { BiUser } from "react-icons/bi";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { RegisterContainer, RegisterForm, RegisterLogo } from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEyeClick = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <RegisterContainer>
      <RegisterLogo>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png"
          alt="Login App"
        />
      </RegisterLogo>
      <RegisterForm>
        <h1>Task List</h1>
        <div className="register-input-name">
          <BiUser />
          <input
            type="text"
            placeholder="Shaolin Matador de Porco"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="register-input-email">
          <MdEmail />
          <input
            type="text"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-input-password">
          <MdLock />
          <input
            type={show ? "text" : "password"}
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="register-input-password-eye">
            {show ? (
              <HiEye size={20} onClick={handleEyeClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleEyeClick} />
            )}
          </div>
        </div>
        <button type="submit">Sign up</button>
        <h4>Already registered?</h4>
        <button type="submit">Sign in</button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
