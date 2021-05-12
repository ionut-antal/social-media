import React, { useState, useEffect } from "react";
import {
  Header as H,
  Container,
  Brand,
  User,
  Icon,
  Icon2,
  Form,
  Input,
} from "./Header.style";
import { Link, useHistory } from "react-router-dom";
import { faGrav } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  avatar: {
    large: "",
  },
  id: "",
  dateRegistered: "",
  online: false,
  _id: "",
  first_name: "",
  last_name: "",
  email: "",
  profile_URL: "",
  password: "",
  __v: 0,
};

export const Header = () => {
  const [user, setUser] = useState(initialState);
  const [search, setSearch] = useState("");

  function handleChange(newValue) {
    setSearch(newValue);
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.user));
  }, []);
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <H>
      <Container>
        <Brand>
          <Link to={user.profile_URL}>
            <Icon icon={faGrav} />
          </Link>
          <Form action="" method="GET" autoComplete="off">
            <Input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => handleChange(e.target.value)}
            />
            <Icon2 icon={faSearch} />
          </Form>
        </Brand>
        <User>
          <Link to={user.profile_URL}>
            <img
              src={user.avatar}
              alt={user.first_name + " " + user.last_name}
            />
          </Link>
          <Dropdown
            myIcon={faGlobe}
            notificationNumber="3"
            image="https://source.unsplash.com/40x40"
            image2="https://source.unsplash.com/41x41"
            fullName="Ionut Antal"
            likeAction="A dat like"
            fullName2="Alex Codrean"
            likeAction2="A dat share"
          />
          <Dropdown
            myIcon={faComments}
            notificationNumber="9"
            image="https://source.unsplash.com/40x40"
            image2="https://source.unsplash.com/41x41"
            fullName="Andrei Varga"
            likeAction="A adaugat un comentariu"
            fullName2="Ioan Botezatu"
            likeAction2="A distribuit postarea ta"
          />
          <Dropdown2 logout={logOut} />
        </User>
      </Container>
    </H>
  );
};
