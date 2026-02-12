import { useNavigate, useLocation } from "react-router-dom";
import styles from "../style/Navbar.module.css";

const navCategories = ["Men", "Women", "Sports", "Shoes", "Accessories"];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (category) => {
    const id = `category-${category.toLowerCase()}`;
    if (isHome) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/", { state: { scrollTo: category } });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrap}>
        <span className={styles.logo} onClick={() => navigate("/")}>
          Fluxon
        </span>
        <span className={styles.tagline}>Fashion & Lifestyle</span>
      </div>

      <ul className={styles.links}>
        {navCategories.map((cat) => (
          <li
            key={cat}
            onClick={() => scrollToSection(cat)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                scrollToSection(cat);
              }
            }}
            role="button"
            tabIndex={0}
          >
            {cat}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button onClick={() => navigate("/login")} className={styles.loginBtn}>
          Login
        </button>
        <button className={styles.cart} onClick={() => navigate("/cart")}>
          <span className={styles.cartIcon}>🛒</span>
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
