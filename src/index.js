import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import React from "react";

function FormSection1() {
  return (
    <div>
      <form id="info-form">
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormSection1;
import React, { useRef } from "react";

function FormSection2() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    console.log(fullName, email, password, passwordConfirmation);
  };

  return (
    <div>
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" ref={fullNameRef} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />

        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          ref={passwordConfirmationRef}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormSection2;




