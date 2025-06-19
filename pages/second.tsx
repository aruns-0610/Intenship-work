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
            src="/diamond-cutting-img.webp"
            className="img"
            width={400}
            height={300}
            alt=""
          />
          <h1>Diamond Cutting</h1>
        </div>

        <div className={styles["second-container"]}>
          <Image src="/freelancer-img.webp" width={400} height={300} alt="" />
          <h1>Freelancing</h1>
        </div>

        <div className={styles["second-container"]}>
          <Image src="/coffee-img-icon.jpg" width={400} height={300} alt="" />
          <h1>Coffee</h1>
        </div>

        <div className={styles["second-container"]}>
          <Image src="/finance-img.jpg" width={400} height={300} alt="" />
          <h1>Financing</h1>
        </div>
      </div>
    </div>
  );
}

export default Second;
