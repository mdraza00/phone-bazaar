import styles from "./App.module.css";
import { PrimayButton } from "./components/PrimayButton";
import { Product } from "./components/Product";
import { SecondaryButton } from "./components/SecondaryButton";
import { Slider } from "./components/Slider";
export function App() {
  return (
    <>
      <div className={styles["nav-bar"]}>
        <img className={styles["nav-logo"]} src="/phone-bazaar.png" />
        <div className={styles["auth-btn-container"]}>
          <PrimayButton />
          <SecondaryButton />
        </div>
      </div>
      <Slider />
      <div style={{ padding: "0 32px" }}>
        <h1>Products</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap:'32px',
            justifyContent:'space-between',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
            return <Product key={el} />;
          })}
        </div>
      </div>
    </>
  );
}
