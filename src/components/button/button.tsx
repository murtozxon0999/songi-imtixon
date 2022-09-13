import { FC } from "react";
import { Link } from "react-router-dom";

import "./button.css";

interface ButtonProps {
  title: string;
  path: any;
}

const Button: FC<ButtonProps> = ({ title, path }) => (
  <>
    <Link className="button" to={path}>
      {title}
    </Link>
  </>
);

export default Button;
