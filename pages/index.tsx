import type { NextPage } from "next";
import Footer from "components/Footer";
import BaseLayout from "components/BaseLayout/BaseLayout";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <BaseLayout>Test for base layout</BaseLayout>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
