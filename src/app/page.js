import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Home – Clínica</h1>

      <p className={styles.text}>
        Bem-vindos ao sistema da Clínica! Aqui vocês poderão:
      </p>

      <ul className={styles.list}>
        <li>Listar consultas</li>
        <li>Agendar consultas</li>
        <li>Gerenciar pacientes</li>
        <li>Gerenciar médicos</li>
      </ul>

      <p className={styles.textSecondary}>
        Use o menu acima para navegar entre as páginas.
      </p>
    </main>
  );
}
