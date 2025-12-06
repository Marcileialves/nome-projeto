"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function CadastroConsultas() {
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [idPaciente, setIdPaciente] = useState("");
  const [idMedico, setIdMedico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [tipo, setTipo] = useState("Particular");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // -----------------------
  // Fetch seguro
  // -----------------------
  async function safeFetchJSON(url) {
    const res = await fetch(url);
    const text = await res.text();

    try {
      return JSON.parse(text);
    } catch {
      console.log("RESPOSTA NÃO É JSON:", text);
      throw new Error("A API retornou algo que não é JSON.");
    }
  }

  async function loadMedicos() {
    try {
      const json = await safeFetchJSON(
        "https://api.clinica.dev.vilhena.ifro.edu.br/medicos"
      );
      setMedicos(json);
    } catch {
      setMsg("❌ Erro ao carregar médicos.");
    }
  }

  async function loadPacientes() {
    try {
      const json = await safeFetchJSON(
        "https://api.clinica.dev.vilhena.ifro.edu.br/pacientes"
      );
      setPacientes(json);
    } catch {
      setMsg("❌ Erro ao carregar pacientes.");
    }
  }

  useEffect(() => {
    loadMedicos();
    loadPacientes();
  }, []);

  // -----------------------
  // Enviar consulta
  // -----------------------
  async function enviar(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const body = {
      idPaciente: Number(idPaciente),
      idMedico: Number(idMedico),
      data,
      hora,
      tipo,
      matricula: "2024103030073",
    };

    try {
      const res = await fetch(
        "https://api.clinica.dev.vilhena.ifro.edu.br/consultas",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const text = await res.text();
      let json;

      try {
        json = JSON.parse(text);
      } catch {
        throw new Error("Resposta da API não é JSON: " + text);
      }

      if (!res.ok) {
        setMsg("❌ Erro: " + (json.message || "Falha ao cadastrar."));
      } else {
        setMsg("✅ Consulta cadastrada! ID: " + json.id);
      }
    } catch (error) {
      setMsg("❌ Erro ao conectar: " + error.message);
    }

    setLoading(false);
  }
  console.log(medicos);
  console.log(pacientes);
  console.log(idPaciente);
  console.log(idMedico);
  console.log(data);  
  console.log(hora);
  console.log(tipo);
  console.log(msg);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Cadastrar Consulta</h1>

      <form className={styles.form} onSubmit={enviar}>
        <label>Paciente:</label>
        <select
          className={styles.input}
          value={idPaciente}
          onChange={(e) => setIdPaciente(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          {pacientes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nome}
            </option>
          ))}
        </select>

        <label>Médico:</label>
        <select
          className={styles.input}
          value={idMedico}
          onChange={(e) => setIdMedico(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          {medicos.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nome} – {m.especialidade}
            </option>
          ))}
        </select>

        <label>Data:</label>
        <input
          type="date"
          className={styles.input}
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />

        <label>Hora:</label>
        <input
          type="time"
          className={styles.input}
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />

        <label>Tipo:</label>
        <input
          type="text"
          className={styles.input}
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />

        <button className={styles.btn} type="submit">
          {loading ? "Enviando..." : "Cadastrar"}
        </button>
      </form>

      {msg && <p className={styles.msg}>{msg}</p>}
    </main>
  );
}
