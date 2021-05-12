import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Header, Post } from "../components";
import { Container, Aside, Main, StickySidebar } from "./Newsfeed.style";
import axios from "axios";

const NewsfeedPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(undefined);
  useEffect(() => {
    axios
      .get("https://backend-curs.herokuapp.com/posts", {
        Authorization: `Bearer ${localStorage.token}`,
      })
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => alert(`whoops: ${JSON.stringify(err)}`));
  });

  if (localStorage.user === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header />
      <Container>
        <Aside>
          <StickySidebar>sticky Sidebar</StickySidebar>
        </Aside>
        <Main>
          {loading ? (
            <div>Please wait...</div>
          ) : (
            posts.map((post, i) => <Post postData={post} key={i} />)
          )}
        </Main>
        <Aside>
          <StickySidebar>sticky Sidebar</StickySidebar>
        </Aside>
      </Container>
    </div>
  );
};

export default NewsfeedPage;
