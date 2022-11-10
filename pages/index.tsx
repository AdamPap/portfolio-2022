import type { NextPage } from "next";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="bg-light-gray">
      <Container>
        <Navbar />
        <Hero />
        <Projects />
      </Container>
    </div>
  );
};

export default Home;
