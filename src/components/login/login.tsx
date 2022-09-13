import { FC } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import "./login.css";
import Back from "../back/back";
import Input from "../input/input";
import Title from "../../title/title";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <>
      <div className="login">
        <h1 className="login-back">
          <Back path="/" />
        </h1>
        <Title title="Login"/>
        <Input placeholder="enter your email address" type="text" label="Email" />
        <Input placeholder="enter your password" type="password" label="Password" />
        <Button title="Login" path={"/profile"} />
        <h5 className="login-register">
          Don't have an account? <Link to="/register">Register</Link>
        </h5>
      </div>
    </>
  );
};

export default Login;
