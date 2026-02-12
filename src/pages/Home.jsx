import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo && typeof scrollTo === "string") {
      const id = `category-${scrollTo.toLowerCase()}`;
      const el = document.getElementById(id);
      if (el) {
        const t = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        navigate(location.pathname, { replace: true, state: {} });
        return () => clearTimeout(t);
      }
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
