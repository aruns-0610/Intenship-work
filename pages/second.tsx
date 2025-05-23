import styles from "../styles/services.module.css";
import Image from "next/image";
function Second() {
  return (
    <div className={styles.second}>
      <h1 data-aos="zoom-in-down" className={styles["second-heading"]}>
        Our <span style={{ color: "var(--main-color)" }}>Services</span>
      </h1>
      {/* <hr data-aos="zoom-in-down" className={styles.hr}></hr> */}

      <div data-aos="zoom-in-up" className={styles.slider}>
        <div
          className={styles["second-container"]}
          //   style={{
          //     backgroundImage: 'url("/diamond.jpg")',
          //   }}
        >
          <Image
            src="/diamond.jpg"
            className="img"
            width={400}
            height={300}
            alt=""
          />
          <h1>Diamond Cutting</h1>
        </div>

        <div className={styles["second-container"]}>
          <Image src="/free.jpg" width={400} height={300} alt="" />
          <h1>Freelancing</h1>
        </div>

        <div className={styles["second-container"]}>
          <Image src="/coffe.jpg" width={400} height={300} alt="" />
          <h1>Coffee</h1>
        </div>

        <div className={styles["second-container"]}>
          <Image src="/gold.jpg" width={400} height={300} alt="" />
          <h1>Financing</h1>
        </div>
      </div>
    </div>
  );
}

export default Second;
