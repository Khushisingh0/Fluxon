import { useEffect, useState } from "react";
import styles from "../style/Banner.module.css";

const banners = [
  {
    title: "Premium Fashion Sale",
    subtitle: "Up to 60% OFF on branded collections",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1600&auto=format&fit=crop&q=70",
  },
  {
    title: "New Season Arrivals",
    subtitle: "Fresh styles for Men & Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&q=70",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.banner}>
      <div
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((item, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.content}>
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
