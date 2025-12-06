import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";


export default function Header() {



  return (
    <div>
        <section className={styles.Header}>
            <Image src='/logoClinica.jpg' alt="Descrição de imagem" width={70} height={70}/>
            <nav className={styles.NavMenu}>
                <ul className={styles.ul}>
                    <li className={styles.li}> 
                        <span className={styles.Lipai}>- Home - </span>
                    </li>
                    <li className={styles.li}> 
                        <span className={styles.Lipai}>Especialidades</span>
                        <ul className={styles.UlSubdois}>
                            <li>Listar</li>
                            <li>Adicionar</li>
                            <li>Editar</li>
                            <li>Excluir</li>
                        </ul>  
                    </li>
                    <li className={styles.li}>
                    <span className={styles.Lipai}>Médicos</span>
                        <ul className={styles.UlSubtres}>
                            <li>Listar</li>
                            <li>Adicionar</li>
                            <li>Editar</li>
                            <li>Excluir</li>
                        </ul>

                    </li>
                    <li className={styles.li}>
                        <span className ={styles.Lipai}>Pacientes</span>
                        <ul className={styles.UlSubquatro}>
                            <li>Listar</li>
                            <li>Adicionar</li>
                            <li>Editar</li>
                            <li>Excluir</li>
                        </ul>
                    </li>
                    <li className={styles.li}>
                        <span className={styles.Lipai}>Consultas    </span>
                        <ul className={styles.UlSubcinco}>
                            <li><Link href='/listarConsultas'>Listar</Link></li>
                            <li><Link href='/cadastroConsultas'>Adicionar</Link></li>
                            <li>Editar</li>
                            <li>Excluir</li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </section>


    </div>
  );
}
