'use client';
import { useState } from 'react';
import styles from './Header.module.css';


export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.Titulo}>
                    Curiosidades e Tecnologia
                </h1>
            </header>
        </>
    );
}