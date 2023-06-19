import React from "react";
import { useState } from "react";

export default function Curring() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  //   const handleUsername = (e) => {
  //     setUsername(e.target.value);
  //   };

  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePhonenumber = (e) => {
  //     setPhonenumber(e.target.value);
  //   };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  return (
    <form>
      <input
        value={username}
        placeholder="User Name"
        onChange={handleChange(setUsername)}
      />
      <input
        value={email}
        placeholder="Email"
        onChange={handleChange(setEmail)}
      />
      <input
        value={phonenumber}
        placeholder="Phone Number"
        onChange={handleChange(setPhonenumber)}
      />
    </form>
  );
}
