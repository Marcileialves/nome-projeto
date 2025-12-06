"use client";

import { useEffect, useState } from "react";

export default function ListaConsultas() {
  const [consultas, setConsultas] = useState([]);
  const [erro, setErro] = useState("");

  async function carregarConsultas() {
    try {
      const res = await fetch(
        "https://api.clinica.dev.vilhena.ifro.edu.br/consultas?matricula=2024103030073"
      );

      const text = await res.text();
      let json;

      // Segurança — evita erro se vier HTML
      try {
        json = JSON.parse(text);
      } catch {
        console.log("Resposta não é JSON:", text);
        throw new Error("API devolveu formato inválido.");
      }

      setConsultas(json);
    } catch (e) {
      setErro("Erro ao carregar consultas.");
    }
  }

  useEffect(() => {
    carregarConsultas();
  }, [consultas]);
  console.log(consultas);

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "15px" }}>
        Consultas Cadastradas
      </h1>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {/* 🔥 wrapper para scroll em telas pequenas */}
      <div style={wrapper}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>ID</th>
              <th style={th}>Paciente</th>
              <th style={th}>Médico</th>
              <th style={th}>Data</th>
              <th style={th}>Hora</th>
              <th style={th}>Tipo</th>
            </tr>
          </thead>

          <tbody>
            {consultas.map((c) => (
              <tr key={c.id}>
                <td style={td}>{c.id}</td>
                <td style={td}>{c.paciente?.nome}</td>
                <td style={td}>{c.medico?.nome}</td>
                <td style={td}>{c.data}</td>
                <td style={td}>{c.hora}</td>
                <td style={td}>{c.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

/* 🔥 Responsividade */
const wrapper = {
  overflowX: "auto",
  width: "100%",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "600px", // evita quebrar tudo em telas pequenas
  fontSize: "0.9rem",
};

const th = {
  borderBottom: "2px solid #ccc",
  padding: "10px",
  textAlign: "left",
  background: "#f7f7f7",
  whiteSpace: "nowrap",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  whiteSpace: "nowrap",
};
