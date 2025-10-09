import styles from './Footer.module.css'
export default function footer() {
    return (
        <>
            <footer className={styles.footer}>
        <p>© 2025 - Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://seulink.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcilei Alves
          </a>
        </p>
      </footer>
        </>
    );
}