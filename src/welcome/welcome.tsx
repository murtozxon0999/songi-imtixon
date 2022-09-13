import { FC } from "react";
import Button from "../components/button/button";
import Title from "../title/title";
import "./welcome.css";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <>
      <div className="welcome">
        <Title title="Hello Trehe!" />
        <h3>Welcome ro React App</h3>
        <div className="btns">
          <Button path={"/login"} title="Login" />
          <Button path={"/register"} title="Register" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
