import { FC } from "react";
import Back from "../back/back";
import { Link } from "react-router-dom";
import "./edit-profile.css";
import Title from "../../title/title";
import Input from "../input/input";
import Button from "../button/button";

interface EditprofileProps {}

const Editprofile: FC<EditprofileProps> = () => {
  return (
    <>
      <div className="edit-profile">
        <h1 className="login-back">
          <Back path="/profile" />
        </h1>
        <h5 className="profile-logout">
          <Link className="logout" to="/">
            Logout
          </Link>
        </h5>
        <Title title="Edit Profile" />
        <div className="last-name">
          <h1>{"X" + "O"}</h1>
        </div>
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
        <Button path="/profile" title="Update" />
      </div>
    </>
  );
};

export default Editprofile;
