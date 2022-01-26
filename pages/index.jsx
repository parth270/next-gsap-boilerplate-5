import { useRouter } from "next/router";
import React, { useEffect } from "react";
import H1 from "../components/Fonts/H1/H1";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Introduction/about-this-system");
  });

  return (
    <>
      <H1>The Home Page</H1>
    </>
  );
};

export default Home;
