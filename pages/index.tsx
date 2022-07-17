import type { NextPage } from "next";
import Footer from "components/Footer";
import Section from "components/Section";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Section>Test for base layout</Section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
