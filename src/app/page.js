import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.div01}>
          <img src="../img/img01.png" alt="" width={180}/>
          <div className={styles.conteudo}>
            <h2>Computadores pensam como Humanos</h2>
            <p>Pesquisadores estão criando computadores neuromórficos, que tentam imitar o funcionamento do cérebro humano. Esses sistemas são mais rápidos e eficientes em tarefas de reconhecimento de padrões, como visão e fala, consumindo muito menos energia que os computadores tradicionais.</p>
          </div>
          </div>

        <div className={styles.div01}>
          <img src="../img/img02.png" alt="" width={180}/>
          <div className={styles.conteudo}>
          <h2>O primeiro Email da História</h2>
              <p>O primeiro e-mail foi enviado em 1971 por Ray Tomlinson, o inventor do “@”. Ele nem se lembra exatamente do conteúdo, mas diz que era algo como “QWERTYUIOP”. Hoje, bilhões de e-mails são enviados todos os dias, transformando a comunicação mundial.</p>
          </div>
          
        </div>

        <div className={styles.div01}>
          <img src="../img/img-3.png" alt="" width={180}/>
            <div className={styles.conteudo}>
              <h2>impresora 3D de comida</h2>
              <p>Sim, é real! Impressoras 3D de comida conseguem criar pratos camada por camada, usando massas, chocolate e até carne cultivada em laboratório. A tecnologia promete revolucionar a indústria alimentícia, permitindo personalização e produção sustentável de alimentos.</p>
            </div>
         </div>
      </section>


      <section className={styles.section02}>
        <div className={styles.div02}>
          <h3 className={styles.Titulo02}>
          Confira os novos molelos Tecnologia com os sites e adiquira a sua nova versão do chat gpt, continue alavancar a sua carreira.
          </h3> 
          <button className={styles.btn}>
            confira
          </button>
        </div>

      </section>

    </div>
  );
}