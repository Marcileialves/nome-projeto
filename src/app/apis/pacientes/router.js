export async function GET() {
  try {
    const res = await fetch("https://api.clinica.dev.vilhena.ifro.edu.br/pacientes");
    const text = await res.text();

    return Response.json(JSON.parse(text));
  } catch {
    return Response.json({ error: "Erro ao conectar ao servidor real." }, { status: 500 });
  }
}
