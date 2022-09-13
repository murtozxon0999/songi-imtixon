import { FC } from "react";
import { Link } from "react-router-dom";
import "./back.css";

interface BackProps {
  path: string;
}

const Back: FC<BackProps> = ({ path }) => {
  return (
    <>
      <Link className="back" to={path}>
        back
      </Link>
    </>
  );
};

export default Back;
