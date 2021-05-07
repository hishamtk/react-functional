import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { avatar_url, login } = props;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "120px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link className="btn btn-dark btn-sm my-1" to={`user/${login}`}>
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
