export async function POST(req) {
  const body = await req.json();

  try {
    const res = await fetch("https://api.clinica.dev.vilhena.ifro.edu.br/consultas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    return Response.json(JSON.parse(text), { status: res.status });
  } catch {
    return Response.json({ error: "Erro ao enviar consulta." }, { status: 500 });
  }
}
