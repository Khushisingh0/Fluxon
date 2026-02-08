import styles from "../style/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.page}>
      <h2>Your Cart</h2>

      <div className={styles.card}>
        <p>Your cart is empty.</p>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Cart;
