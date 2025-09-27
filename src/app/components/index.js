'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.Titulo}>
                    Curiosidades & Tecnologia
                </h1>
                <nav className={styles.navbar}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/">Sobre</Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/">Contato</Link>    
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}