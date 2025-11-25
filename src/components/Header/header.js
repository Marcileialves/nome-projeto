import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
        <section className={styles.Header}>
            <Image src='/logoClinica.jpg' alt="Descrição de imagem" width={70} height={70}/>
            <nav className={styles.NavMenu}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Especialidade    
                    </li>
                    <li>
                        Médicos
                    </li>
                    <li>
                        Paciente
                    </li>
                    <li>
                        Consultas
                    </li>
                </ul>
            </nav>

        </section>
    </div>
  );
}
