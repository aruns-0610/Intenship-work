import React from "react";
import "boxicons/css/boxicons.min.css";
import cssSheet from "../styles/contact.module.css";

const ContactUs: React.FC = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.description}>
          We `&#39;`d love to hear from you! Fill out the form below or reach us
          through the provided details.
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
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
        <p style={styles.footer}>
          You can also reach us at:{" "}
          <a href="mailto:info@internzo.com" style={styles.link}>
            info@internzo.com
          </a>
        </p>
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
    fontSize: "1.2rem",
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
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "transparent",
    color: "#fff",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "transparent",
    color: "#fff",
    height: "100px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid rgba(255,255,255,0.5)",
    backgroundColor: "transparent",
    color: "#fff",
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
};

export default ContactUs;
