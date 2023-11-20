import { useEffect, useState } from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  const [position, setPosition] = useState(0);
  const [points, setPoints] = useState(["pointActive", "point", "point"]);

  function handleClickPoint(index) {
    if (index === 0) {
      setPosition(0);
      setPoints(["pointActive", "point", "point"]);
    } else if (index === 1) {
      setPosition(-100);
      setPoints(["point", "pointActive", "point"]);
    } else {
      setPosition(-200);
      setPoints(["point", "point", "pointActive"]);
    }
  }
  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      handleClickPoint(counter);
      if (counter === 2) {
        counter = 0;
      } else {
        counter++;
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <header className={styles.headerContainer} id="header">
        <div className={styles.headerContent}>
          <div className={styles.headerTextContainer}>
            <div className={styles.headerText}>
              <h3>Mauro Barone</h3>
              <span>INGENIERO AGRIMENSOR</span>
            </div>
            <div className={styles.headerTextWhite}>
              <h3>SERVICIO DE INGENIERÍA</h3>
              <span>TRABAJOS RURALES Y URBANOS</span>
            </div>
          </div>
          <div className={styles.pointsContainer}>
            {points.map((point, index) => {
              return (
                <div
                  key={index}
                  className={styles[point]}
                  onClick={(e) => {
                    handleClickPoint(index);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div
          className={styles.headerImgContainer}
          style={{ transform: `translateX(${position}%)` }}
        >
          <div className={styles.headerImg}></div>
          <div className={styles.headerImg2}></div>
          <div className={styles.headerImg3}></div>
        </div>
      </header>
    </>
  );
}
