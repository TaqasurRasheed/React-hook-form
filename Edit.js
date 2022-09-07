import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./context/Context";

const Edit = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const id = useParams().id;
  console.log(id);

  const onSubmit = () => {
    const newEntry = {
      id: new Date().getTime().toString(),
      email,
      password,
    };
    setUser([...user, newEntry]);
    navigate("/users");
    // navigate("/users");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          {...register("email")}
          onChange={(e) => {
            setEmail((pre) => ({
              ...pre,
              [e.target.name]: e.target.value,
            }));
          }}
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          {...register("password")}
          onChange={(e) => {
            setPassword((pre) => ({
              ...pre,
              [e.target.name]: e.target.value,
            }));
          }}
          // onChange={(e) => {
          //   setPassword((prevState) => ({
          //     ...prevState,
          //     [e.target.value]: e.target.value,
          //   }));
          // }}
          placeholder="Password"
        />
        <button type="Submit"> Update</button>
      </form>
    </div>
  );
};

export default Edit;
