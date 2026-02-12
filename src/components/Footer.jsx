import { useNavigate, useLocation } from "react-router-dom";
import styles from "../style/Footer.module.css";

const categories = ["Men", "Women", "Sports", "Shoes", "Accessories"];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (category) => {
    const id = `category-${category.toLowerCase()}`;
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/", { state: { scrollTo: category } });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Shop by Category</h3>
            <ul className={styles.linkList}>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    className={styles.footerLink}
                    onClick={() => scrollToSection(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Customer Service</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Contact Us</a></li>
              <li><a href="#" className={styles.footerLink}>FAQs</a></li>
              <li><a href="#" className={styles.footerLink}>Shipping & Returns</a></li>
              <li><a href="#" className={styles.footerLink}>Size Guide</a></li>
              <li><a href="#" className={styles.footerLink}>Track Order</a></li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>About Us</a></li>
              <li><a href="#" className={styles.footerLink}>Careers</a></li>
              <li><a href="#" className={styles.footerLink}>Press</a></li>
              <li><a href="#" className={styles.footerLink}>Terms & Conditions</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Stay in touch</h3>
            <p className={styles.newsletterText}>Subscribe for offers and new arrivals.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.newsletterInput}
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
            </form>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">Facebook</a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">Instagram</a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>© 2026 Fluxon. All rights reserved.</p>
        <div className={styles.payment}>
          <span className={styles.paymentLabel}>We accept</span>
          <span className={styles.paymentIcons}>Cards • UPI • Net Banking • COD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
