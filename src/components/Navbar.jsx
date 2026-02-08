import { useNavigate } from "react-router-dom";
import styles from "../style/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo} onClick={() => navigate("/")}>
        Fluxon
      </h1>

      <ul className={styles.links}>
        <li>Men</li>
        <li>Women</li>
        <li>Sports</li>
        <li>Accessories</li>
      </ul>

      <div className={styles.actions}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button className={styles.cart} onClick={() => navigate("/cart")}>
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
