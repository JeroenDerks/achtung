import type { NextPage } from "next";
import Footer from "components/Footer";
import BlogArticle from "components/BlogArticle";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <BlogArticle />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
