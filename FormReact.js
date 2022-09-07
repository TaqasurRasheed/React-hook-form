import React, { useContext, useState } from "react";
import { AuthContext } from "./context/Context";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
const FormReact = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //// For Edit
  const onSubmit = () => {
    if (!email || !password) {
      alert("plzz fill data");
    } else if (email && password && !toggleSubmit) {
      setUser(
        user.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, email: email, password: password };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setEmail("");
      setPassword("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        email,
        password,
      };
      setUser([...user, allInputData]);
      setEmail("");
      setPassword("");
    }
  };
  console.log(user);
  const editItem = (id) => {
    let newEditItem = user.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setEmail(newEditItem.email);
    setPassword(newEditItem.password);

    setIsEditItem(id);
  };

  // const onSubmit = () => {
  //   const newEntry = {
  //     id: new Date().getTime().toString(),
  //     email,
  //     password,
  //   };
  //   setUser([...user, newEntry]);
  //   setEmail("");
  //   setPassword("");
  //   setToggleSubmit(true);
  //   // navigate("/users");
  // };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
          <input
            type="password"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={(e) => {
            //   setPassword((prevState) => ({
            //     ...prevState,
            //     [e.target.value]: e.target.value,
            //   }));
            // }}
            placeholder="Password"
          />

          {toggleSubmit ? (
            <button
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          ) : (
            <button
              className="far fa-edit add-btn"
              title="Update Item"
              onClick={handleSubmit(onSubmit)}
            >
              Update{" "}
            </button>
          )}
        </form>
      </div>
      <div>
        {user.map((curElem) => {
          const { id, email, password } = curElem;
          return (
            <div>
              <p key={id}></p>
              <p>Email: {email}</p>
              <p> Password: {password}</p>
              <div>
                <button onClick={() => editItem(id)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default FormReact;
