import styles from "../style/Categories.module.css";

const categories = ["Men", "Women", "Sports", "Shoes", "Accessories"];

const Categories = () => {
  const scrollToCategory = (category) => {
    const id = `category-${category.toLowerCase()}`;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.wrapper}>
      {categories.map((cat) => (
        <div
          key={cat}
          className={styles.catcard}
          onClick={() => scrollToCategory(cat)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToCategory(cat);
            }
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Categories;
