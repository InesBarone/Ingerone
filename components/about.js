import Image from "next/image";
import { useState } from "react";
import styles from "../styles/about.module.css";

export default function About() {
  const [position, setPosition] = useState(0);
  const [counter, setCounter] = useState(1);

  function handleRightClick() {
    if (counter === 10) {
      setCounter(1);
      setPosition(0);
    } else {
      setCounter((prev) => {
        prev += 1;
        return prev;
      });
      setPosition((pos) => {
        pos -= 400;
        return pos;
      });
    }
  }

  function handleLeftClick() {
    if (position === 0) {
      setCounter(10);
      setPosition(-3600);
    } else {
      setCounter((prev) => {
        return prev--;
      });
      setPosition((pos) => {
        pos += 400;
        return pos;
      });
    }
  }

  return (
    <>
      <section id="about">
        <div className={styles.aboutSection}>
          <div className={styles.textSection}>
            <h3>SOBRE LA EMPRESA</h3>
            <p>
              IngErone es una empresa uruguaya de profesionales Ingenieros
              Agrimensores, Arquitectos y colaboradores técnicos que ofrece
              servicios de Agrimensura, Topografia y Arquitectura. Buscando
              siempre resolver, asesorar y solucionar la propuesta del cliente,
              la empresa cuenta con equipos y softwares tecnológicos de última
              generación para la resolución rápida y precisa del trabajo.
            </p>
          </div>
          <div className={styles.aboutImgContainer}>
            <button
              className={styles.carouselButton}
              onClick={(e) => handleLeftClick(e)}
            >
              <Image
                src="/arrow_left.png"
                width={20}
                height={20}
                className={styles.img}
              />
            </button>
            <div className={styles.carouselContainer}>
              <div
                style={{ transform: `translateX(${position}px)` }}
                className={styles.carousel}
              >
                <Image
                  className={styles.img}
                  src="/img1.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img0.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img2.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img3.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img5.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img6.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img7.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img8.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img9.jpeg"
                  width={400}
                  height={500}
                />
                <Image
                  className={styles.img}
                  src="/img10.jpeg"
                  width={400}
                  height={500}
                />
              </div>
            </div>
            <button
              className={styles.carouselButtonRight}
              onClick={(e) => handleRightClick(e)}
            >
              <Image
                src="/arrow_right.png"
                width={20}
                height={20}
                className={styles.img}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
