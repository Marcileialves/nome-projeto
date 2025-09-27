import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.div01}>
          <img src="/public/img/img01.png" alt="" />
          <h2>Computadores pensam como Humanos</h2>
          <p>Pesquisadores estão criando computadores neuromórficos, que tentam imitar o funcionamento do cérebro humano. Esses sistemas são mais rápidos e eficientes em tarefas de reconhecimento de padrões, como visão e fala, consumindo muito menos energia que os computadores tradicionais.</p>
        </div>

        <div className={styles.div02}>
          <img src="/public/img/img01.png" alt="" />
          <h2>O primeiro Email da História</h2>
          <p>O primeiro e-mail foi enviado em 1971 por Ray Tomlinson, o inventor do “@”. Ele nem se lembra exatamente do conteúdo, mas diz que era algo como “QWERTYUIOP”. Hoje, bilhões de e-mails são enviados todos os dias, transformando a comunicação mundial.</p>
        </div>

        <div className={styles.div03}>
          <img src="/public/img/img01.png" alt="" />
          <h2>impresora 3D de comida</h2>
          <p>Sim, é real! Impressoras 3D de comida conseguem criar pratos camada por camada, usando massas, chocolate e até carne cultivada em laboratório. A tecnologia promete revolucionar a indústria alimentícia, permitindo personalização e produção sustentável de alimentos.</p>
        </div>

      </section>

    </div>
  );
}