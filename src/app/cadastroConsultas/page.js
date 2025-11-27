'use client'
import { useState, useEffect} from 'react'
import styles from './page.module.css'

export default function cadastroConsulta(){
    const [pacientes,setPacientes] = useState([])
    const [medicos,setMedicos] = useState([])

    const getPacientes = async () => {
        try {
            const response = await fetch(`https://api.clinica.dev.vilhena.ifro.edu.br/pacientes`);
            if (!response.ok) {
                setStatus(response.statusText);
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            const dados = await response.json();
            setPacientes(dados); // alterado
        } catch (e) {
            console.log(`Ocorreu um erro: ${e.message}`);
        }
    }
    const getMedicos = async () => {
        try {
            const response = await fetch(`https://api.clinica.dev.vilhena.ifro.edu.br/medicos`);
            if (!response.ok) {
                setStatus(response.statusText);
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            const dados = await response.json();
            setMedicos(dados); // alterado
        } catch (e) {
            console.log(`Ocorreu um erro: ${e.message}`);
        }
    }

    useEffect(() =>{
        getPacientes()
        getMedicos()

    },[])

    
    return (
        <div>

            <section className={styles.container}>
                <h2 className={styles.Titulo}>Cadastro Consultas</h2>
                <label className={styles.Label}>
                    Pacientes:
                </label>
                <select id='Paciente' name='Paciente'>
                {pacientes.map(pacient => (
                    <option key={pacient.id}>
                        {pacient.nome}
                    </option>
                ))}
                </select>
                
                <label className={styles.Label}>
                    Médicos:
                </label>
                <select id='Medicos' name='Medicos'>
                {medicos.map(medic => (
                    <option key={medic.id}>
                        {medic.nome}
                    </option>
                ))}    
                </select>
                
                <div>
                <label className={styles.Label}>Data:</label>
                <input type="date" id="prazo" name="prazo" min="2025-11-27" max="2026-12-31"/>

                <label className={styles.Label}>
                    Horas:
                </label>
                <select>
                    <option value='Horas'>07:00 </option>
                    <option value='Horas'>07:30 </option>
                    <option value='Horas'>08:00 </option>
                    <option value='Horas'>08:30 </option>
                    <option value='Horas'>09:00 </option>
                    <option value='Horas'>09:30 </option>
                    <option value='Horas'>10:00 </option>
                    <option value='Horas'>10:30 </option>
                    <option value='Horas'>11:00 </option>
                    <option value='Horas'>11:30 </option>
                    <option value='Horas'>12:00 </option>
                    <option value='Horas'>12:30 </option>
                    <option value='Horas'>13:30 </option>
                    <option value='Horas'>14:00 </option>
                    <option value='Horas'>14:30 </option>
                    <option value='Horas'>15:00 </option>
                    <option value='Horas'>15:30 </option>
                    <option value='Horas'>16:00 </option>
                    <option value='Horas'>16:30 </option>
                    <option value='Horas'>17:00 </option>
                    <option value='Horas'>17:30 </option>
                </select>
                </div>
                
                <label className={styles.Label}>
                    Tipos de consultas
                </label>
                <select id='TiposConsulta' name='TiposConsulta'>
                    <option value="PlanodeSaúde" >Plano de Saúde</option>
                    <option value='Particular'> Particular </option>
                </select>
            </section>
            
        </div>
    )
    
}