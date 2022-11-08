import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-light-gray">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
};

export default Home;
