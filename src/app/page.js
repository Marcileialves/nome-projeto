"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const divs = document.querySelectorAll(`.${styles.div01}`);
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    divs.forEach((div) => {
      div.addEventListener("click", () => {
        popup.style.display = "block";
      });
    });

    closeBtn?.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // cleanup ao desmontar o componente
    return () => {
      divs.forEach((div) => {
        div.removeEventListener("click", () => {});
      });
      closeBtn?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.div01}>
          <img src="../img/img01.png" alt="" width={180} />
          <div className={styles.conteudo}>
            <h2>Computadores pensam como Humanos</h2>
            <p>
              Pesquisadores estão criando computadores neuromórficos, que tentam
              imitar o funcionamento do cérebro humano. Esses sistemas são mais
              rápidos e eficientes em tarefas de reconhecimento de padrões, como
              visão e fala, consumindo muito menos energia que os computadores
              tradicionais.
            </p>
          </div>  
        </div>

        <div className={styles.div01}>
          <img src="../img/img02.png" alt="" width={180} />
          <div className={styles.conteudo}>
            <h2>O primeiro Email da História</h2>
            <p>
              O primeiro e-mail foi enviado em 1971 por Ray Tomlinson, o
              inventor do “@”. Ele nem se lembra exatamente do conteúdo, mas diz
              que era algo como “QWERTYUIOP”. Hoje, bilhões de e-mails são
              enviados todos os dias, transformando a comunicação mundial.
            </p>
          </div>
        </div>

        <div className={styles.div01}>
          <img src="../img/img-3.png" alt="" width={180} />
          <div className={styles.conteudo}>
            <h2>Impressora 3D de comida</h2>
            <p>
              Sim, é real! Impressoras 3D de comida conseguem criar pratos camada
              por camada, usando massas, chocolate e até carne cultivada em
              laboratório. A tecnologia promete revolucionar a indústria
              alimentícia, permitindo personalização e produção sustentável de
              alimentos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section02}>
        <div className={styles.div02}>
          <h3 className={styles.Titulo02}>
            Confira os novos modelos de tecnologia nos sites e adquira a sua
            nova versão do ChatGPT. Continue alavancando a sua carreira.
          </h3>
          <button className={styles.btn}><a href={'https://g1.globo.com/tecnologia/'} className={styles.Link}>Acesse</a>  </button>
        </div>
      </section>

      {/* 📰 POPUP estilo jornal */}
      <div id="popup" className={styles.popup}>
        <h3>📰 Novidade Tecnológica</h3>
        <p>
          Acesse Mais noticias, se vc gosta de noticias acesse outros sites.
        </p>
        <button id="closePopup">Fechar</button>
      </div>
    </div>
  );
}
