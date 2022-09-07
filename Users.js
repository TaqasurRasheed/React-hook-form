import React, { useContext, useState } from "react";
import { AuthContext } from "./context/Context";
import { useNavigate, Link } from "react-router-dom";
const Users = (params) => {
  const { user, setUser } = useContext(AuthContext);
  const [isEditItem, setIsEditItem] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      {Object.values(user)?.map((curElem) => {
        const { id, email, password } = curElem;
        return (
          <div className="showDataStyle" key={id}>
            <p>Email: {email}</p>
            <p> Password: {password}</p>
            {/* <button onClick={handleClick}>Edit</button> */}
            <p>
              {/* <Link to={"/edit/" + id}>Edit</Link> */}
              {/* <Link to={"/FormReact/"}>Edit</Link> */}
              <button onClick={() => editItem(id)}>
                Edit {/* <Link to={"/edit/:" + id}>Edit</Link> */}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
