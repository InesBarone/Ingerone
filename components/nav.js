import Link from "next/link";
import styles from "../styles/nav.module.css";
import { animateScroll } from "react-scroll";
import { useState } from "react";

export default function Nav() {
  const [menuClass, setMenuClass] = useState("menuBurger");
  const [openUl, setOpenUl] = useState("");

  function handleMenu(e) {
    if (menuClass === "menuBurger") {
      setMenuClass("menuBurgerOpen");
      setOpenUl("openUl");
    } else {
      setOpenUl("");
      setMenuClass("menuBurger");
    }
  }

  return (
    <>
      <nav>
        <div className={styles.headerNav}>
          <ul className={styles[openUl]}>
            <li>
              <Link
                href="#"
                onClick={() => {
                  animateScroll.scrollTo(0);
                  setMenuClass("menuBurger");
                  setOpenUl("");
                }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={() => {
                  animateScroll.scrollTo(500);
                  setMenuClass("menuBurger");
                  setOpenUl("");
                }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => {
                  animateScroll.scrollTo(900);
                  setMenuClass("menuBurger");
                  setOpenUl("");
                }}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => animateScroll.scrollTo(1800)}>
                Contacto
              </Link>
            </li>
          </ul>
          <div className={styles[menuClass]} onClick={(e) => handleMenu(e)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </nav>
    </>
  );
}
