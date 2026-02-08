import styles from "../style/Categories.module.css";

const data = ["Men", "Women", "Sports", "Shoes", "Accessories"];

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((cat) => (
        <div key={cat} className={styles.catcard}>
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Categories;
