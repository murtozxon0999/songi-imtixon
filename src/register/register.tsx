import { FC } from "react";
import Back from "../components/back/back";
import Button from "../components/button/button";
import Input from "../components/input/input";
import { Link } from "react-router-dom";
import "./register.css";
import Title from "../title/title";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <>
      <div className="register">
        <h1 className="login-back">
          <Back path="/" />
        </h1>
        <Title title="Register" />
        <div className="register-inputs">
          <Input
            placeholder="enter your first name"
            type="text"
            label="First Name"
            width="200px"
          />
          <Input
            placeholder="enter your last name"
            type="text"
            label="Last Name"
            width="200px"
          />
        </div>
        <div className="register-inputs">
          <Input
            placeholder="enter your email address"
            type="email"
            label="Email"
            width="200px"
          />
          <Input
            placeholder="enter your password"
            type="password"
            label="Password"
            width="200px"
          />
        </div>
        <Button path="/login" title="Register" />
        <h5 className="login-register">
          Don't have an account? <Link to="/login">Login</Link>
        </h5>
      </div>
    </>
  );
};

export default Register;
