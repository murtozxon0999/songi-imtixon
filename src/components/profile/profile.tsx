import { FC } from "react";
import { Link } from "react-router-dom";
import Title from "../../title/title";
import "./profile.css";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return (
    <>
      <div className="profile">
        <h5 className="profile-logout">
          <Link className="logout" to="/">
            Logout
          </Link>
        </h5>
        <Title title="My Profile" />
        <div className="datas">
          <div className="last-name">
            <h1>{"X" + "O"}</h1>
          </div>
          <div className="data">
            <h4 className="titles">First Name</h4>
            <h4>{"Xasanboy"}</h4>
            <h4 className="titles">Last Name</h4>
            <h4>{"Orifjonov"}</h4>
            <h4 className="titles">Email</h4>
            <h4>{"xasanboyorifjonov070@gmail.com"}</h4>
          </div>
        </div>
        <Link className="profile-edit" to="/edit-profile">
          Edit profile
        </Link>
      </div>
    </>
  );
};

export default Profile;
