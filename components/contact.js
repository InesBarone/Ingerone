import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeSubject(e) {
    setSubject(e.target.value);
  }
  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailUrl =
      "mailto:ingeroneing@gmail.com?subject=" +
      encodeURIComponent(subject + " | " + name) +
      "&body=" +
      encodeURIComponent(message);
    window.location.href = emailUrl;
  }

  return (
    <section id="contact">
      <div className={styles.contactContainer}>
        <h3>Envíenos sus consultas:</h3>
        <form className={styles.formContainer}>
          <div className={styles.formTop}>
            <label>
              <span>Nombre: </span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Escriba su nombre"
                onChange={(e) => handleChangeName(e)}
                required
              />
            </label>
            <label>
              <span>Email: </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Escriba su email"
                onChange={(e) => handleChangeEmail(e)}
                required
              />
            </label>
          </div>
          <label>
            <span>Asunto: </span>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Escriba asunto"
              onChange={(e) => handleChangeSubject(e)}
              required
            />
          </label>
          <label>
            <span>Mensaje: </span>
            <textarea
              id="message"
              name="message"
              placeholder="Escriba su mensaje"
              onChange={(e) => handleChangeMessage(e)}
              required
            ></textarea>
          </label>
          <label className={styles.submitButton}>
            <input type="submit" onClick={(e) => handleSubmit(e)} />
          </label>
        </form>
      </div>
    </section>
  );
}
