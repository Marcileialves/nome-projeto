"use client";
import styles from './page.module.css'

export default function AboutMe() {
  return (
    <div className={styles.aboutmecontainer}>
      <section className={styles.aboutmecard}>
        <h1 className={styles.aboutmetitle}>Sobre Mim</h1>
        <p className={styles.aboutmetext}>
          Olá! Meu nome é [Seu Nome] e sou um entusiasta de tecnologia e desenvolvimento web. Adoro aprender sobre novas linguagens de programação, explorar frameworks modernos como React e Next.js, e criar projetos que unem criatividade e funcionalidade.
        </p>
        <p className={styles.aboutmetext}>
          Além de programação, tenho interesse em inteligência artificial, inovação tecnológica e design de interfaces. Gosto de desafios e sempre busco aprimorar minhas habilidades, trabalhando em projetos que possam fazer diferença.
        </p>
        <p className={styles.aboutmetext}>
          Quando não estou codando, gosto de ler sobre ciência e tecnologia, jogar videogames e explorar novas ferramentas digitais.
        </p>
      </section>
      </div>
  );
}
