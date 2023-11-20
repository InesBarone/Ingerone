import { useState } from "react";
import styles from "../styles/services.module.css";

export default function Services() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    setIsClicked(true);
  }

  return (
    <>
      <section id="services" name="services">
        <div className={styles.serviceSection}>
          <h3>BRINDAMOS SOLUCIONES EFECTIVAS</h3>
          <ul>
            <li>Planos de arquitectura y agrimensura, </li>
            <li>trámites ante las intendencias y ministerios, </li>
            <li>permiso de construcción, </li>
            <li>habilitaciones, </li>
            <li>declaración jurada de caracterización urbana, </li>
            <li>replanteos y controles de obra, </li>
            <li>relevamientos, </li>
            <li>amojonamientos, </li>
          </ul>
          {isClicked ? (
            <>
              <div className={styles.servicesList}>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>
                    <h3>Planos en general de Arquitectura y Agrmiensura</h3>
                  </div>
                  <ul>
                    <li>Mensura urbana y rural</li>
                    <li>Fraccionamiento</li>
                    <li>Propiedad horizontal</li>
                    <li>Reparcelamiento</li>
                    <li>Fusión</li>
                  </ul>
                </div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>
                    <h3>Relevamientos</h3>
                  </div>
                  <ul>
                    <li>Planialtimétricos</li>
                    <li>Escaner y modelado 3D</li>
                    <li>Cálculo de volumen</li>
                    <li>Batimetrías</li>
                    <li>Drones</li>
                  </ul>
                </div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>
                    <h3>Trámites y gestión</h3>
                  </div>
                  <ul>
                    <li>Permiso de construcción y demolición</li>
                    <li>Declaración jurada de caracterización urbana</li>
                    <li>Bomberos</li>
                    <li>Tasaciones</li>
                    <li>Habilitaciones</li>
                    <li>Catastro</li>
                    <li>Trámites ante las intendencias, ministerios, etc.</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Ver mas...
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
