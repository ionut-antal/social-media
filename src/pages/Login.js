import React, { useState } from "react";
import { PageWrap, Container } from "./forms.style";
import { Input, SubmitBtn } from "../components";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const LogInPage = ({ handleLogIn }) => {
  const [email, setEmail] = useState("ionut@yahoo.com");
  const [password, setPassword] = useState("1234");
  // eslint-disable-next-line
  const [error, setError] = useState(undefined);

  if (localStorage.user !== undefined) {
    return <Redirect to="/newsfeed" />;
  }

  function handleChange(value, input) {
    switch (input) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit() {
    // console.log(email, password);
    axios
      .post("https://backend-curs.herokuapp.com/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        handleLogIn(response.data.user);
      })
      .catch((e) => console.log(e));
  }

  return (
    <PageWrap>
      <Container>
        <h1>Log in</h1>
        <p>Log in to view newsfeed</p>
        <Input
          type="email"
          handleChange={(e) => handleChange(e.target.value, "email")}
          value={email}
          placeholder="E-mail address"
        />
        <Input
          type="password"
          handleChange={(e) => handleChange(e.target.value, "password")}
          value={password}
          placeholder="Password"
          error={error}
        />
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <SubmitBtn text="Log in" handleClick={handleSubmit} />
      </Container>
    </PageWrap>
  );
};

export default LogInPage;
