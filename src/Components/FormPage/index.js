import React, { useState } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import Info from "../InfoPage";
import "./index.css";

function FormPage() {
  const { navigate } = useNavigate();

  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [graduation, setGraduation] = useState();

  let nameError = document.getElementById("name-error");
  let ageError = document.getElementById("age-error");
  let emailError = document.getElementById("email-error");
  let gradError = document.getElementById("grad-error");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/;
    const numbers = /\d/;
    const curentYear = new Date().getFullYear();
    const emailtest = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (specialChars.test(name)) {
      nameError.style.display = "block";
      console.log("Name Symbol Error");
    } else if (numbers.test(name)) {
      nameError.style.display = "block";
      console.log("Name Error");
    } else if (age < 16) {
      ageError.style.display = "block";
      console.log("Age Error");
    } else if (curentYear - graduation < 16) {
      gradError.style.display = "block";
    } else {
      signUserUp();
    }
  };

  const signUserUp = (e) => {
    const new_user = {
      name: name,
      age: age,
      email: email,
      graduation_year: graduation,
    };
    navigate("/info", { state: new_user });
  };

  setUser(new_user);
  console.log(new_user);

  return (
    <Redirect
      to={{
        pathname: "/info",
        state: {
          name: name,
          age: age,
          email: email,
          graduation_year: graduation,
        },
      }}
    />
  );
}



  return (
   <> <div className="form-container">
    <div className="form">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className="input-container">
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            noValidate
          />
          <span id="name-error">Please enter a valid name</span>
        </div>

        <div className="input-container">
          <label for="name">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            // onChange={handleChange}
          />
          <span id="age-error">Please enter a number</span>
        </div>

        <div className="input-container">
          <label for="name">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span id="email-error">Please enter a valid email</span>
        </div>

        <div className="input-container">
          <label for="name">Graduation Year</label>
          <input
            type="text"
            placeholder="Enter your graduation year"
            name="grad_year"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
          />
          <span id="grad-error">Please enter your graduation year</span>
        </div>

        <button className="button">Submit Now</button>
      </form>
    </div>
  </div>
  </>
);
  
  export default FormPage;
