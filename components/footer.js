import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <h4>CONTACTO</h4>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:ingeroneing@example.com" target="_blanck">
              ingeroneing@gmail.com
            </a>
          </li>
          <li>
            Whatsapp:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=+598099932147&text=Hola!,%20quería%20consultar%20sobre..."
              target="_blanck"
            >
              099932147
            </a>
            -{" "}
            <a
              href="https://api.whatsapp.com/send?phone=+598098994829&text=Hola!,%20quería%20consultar%20sobre..."
              target="_blanck"
            >
              098994829
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
