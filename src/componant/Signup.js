import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  const EmailError = (e) => {
    const email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
    setEmail(email);
  };

  const PasswordError = (e) => {
    const password = e.target.value;
    if (!password.match(passwordRegex)) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    if (!email.match(emailRegex)) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
    const password = e.target[1].value;

    if (!password.match(passwordRegex)) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    if (email.match(emailRegex) && password.match(passwordRegex)) {
      alert("Username : " + email + "\nPassword : " + password);
    }
    setPassword("");
    setEmail("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ height: "100vh" }}
      className="d-flex justify-content-center container-fluid "
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Sign up</h1>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Username or email...."
              maxlength="30"
              alue={email}
              onChange={EmailError}
            />
            <div style={{ height: "20px" }}>
              {emailerror ? (
                <span style={{ color: "red" }}>Invalid Email...</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="m-4">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              maxlength="15"
              value={password}
              onChange={PasswordError}
            />
            <div style={{ height: "20px" }}>
              {passworderror ? (
                <span style={{ color: "red" }}>Invalid Password...</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <button className="btn btn-dark">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
