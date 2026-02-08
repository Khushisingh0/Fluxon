import ProductCard from "../components/ProductCard";
import products from "../data/products";
import styles from "../style/Products.module.css";

const sections = ["Men", "Women", "Sports"];

const Products = () => {
  return (
    <div className={styles.page}>
      {sections.map((section) => (
        <section key={section} className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{section}</h2>
            <button className={styles.seeMore}>See More</button>
          </div>

          <div className={styles.grid}>
            {products
              .filter((p) => p.category === section)
              .slice(0, 5)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
