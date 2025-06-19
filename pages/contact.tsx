import React from "react";
import "boxicons/css/boxicons.min.css";
import cssSheet from "../styles/contact.module.css";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <div style={styles.details} className="contact-us-details">
          <div style={styles.adrDiv} className="addr">
            <div style={styles.imgDiv} className="img-div">
              <Image src="/locations-icon.png" width={23} height={23} alt="" />
            </div>
            <div className="addr-info">
              <span style={styles.span}>Address</span>
              <p>182 2th street, New York NY 10016</p>
            </div>
          </div>
          <div className="addr">
            <div style={styles.imgDiv} className="img-div">
              <i className="bx  bx-phone"></i>
            </div>
            <div className="addr-info">
              <span style={styles.span}>Phone</span>
              <p>+91 8754989934</p>
            </div>
          </div>
          <div className="addr">
            <div style={styles.imgDiv} className="img-div">
              <i className="bx  bx-send"></i>
            </div>
            <div className="addr-info">
              <span style={styles.span}>Email</span>
              <p>
                <a>info@internzo.com</a>
              </p>
            </div>
          </div>
        </div>
        <p style={styles.description}>
          {/* We `&#39;`d love to hear from you! Fill out the form below or reach us
          through the provided details. */}
          Get in touch with us
        </p>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
        {/* <p style={styles.footer}>
          You can also reach us at:{" "}
          <a href="mailto:info@internzo.com" style={styles.link}>
            info@internzo.com
          </a>
        </p> */}
      </div>
      <div className="footer-div" style={{ textAlign: "center" }}>
        <div className={cssSheet["social-media"]}>
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <p className="p">&copy; 2024 copyrights reserved</p>
        <p className="p">Developed by Saravana</p>
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "80vh",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.6rem",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "black",
    color: "#fff",
  },
  textarea: {
    width: "100%",
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "black",
    color: "#fff",
    height: "160px",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    padding: "0.8rem 1rem",
    background: "var(--main-color)",
    borderRadius: "0.3rem",
    boxShadow: "none",
    fontSize: "0.9rem",
    border: "none",
    color: "var(--bg-color)",
    letterSpacing: "0.1rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  footer: {
    marginTop: "20px",
    fontSize: "1rem",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
  mediaDiv: {
    width: "100%",
    fontSize: "2rem",
    color: "var(--main-color)",
    paddingTop: "2rem",
    paddingBottom: "1.4rem",
    display: "flex",
    justifyContent: "center" as const,
    gap: "2rem",
    textDecoration: "none",
  },
  a: {
    fontSize: "1.7rem",
    color: "var(--main-color)",
    border: "2px solid var(--main-color)",
    width: "2.58rem",
    height: "42px",
    lineHeight: " 42px",
    display: "inline-block",
    borderRadius: "50%",
    margin: "0 10px",
    transition: "0.3s ease-in-out",
  },
  span: {
    color: "var(--main-color)",
    fontWeight: "550",
  },

  details: {
    display: "flex",
    justifyContent: "center",
    gap: "4rem",
    padding: "2rem",
  },

  imgDiv: {
    backgroundColor: "var(--main-color)",
    borderRadius: "2rem",
    height: "2.2rem",
    width: "3.15rem",
    paddingTop: "1rem",
    color: "black",
    margin: "0 auto 1rem auto",
    marginBottom: "1rem",
    fontSize: "1.3rem",
  },

  adrDiv: {
    textAlign: "center" as const,
    width: "160px",
  },
};

export default ContactUs;
