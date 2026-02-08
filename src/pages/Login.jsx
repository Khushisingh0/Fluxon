import styles from "../style/Login.module.css";

const Login = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2>Login to Fluxon</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p className={styles.text}>
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
