export async function GET() {
  const res = await fetch("https://api.clinica.dev.vilhena.ifro.edu.br/medicos");
  const text = await res.text();

  try {
    return Response.json(JSON.parse(text));
  } catch {
    return Response.json(
      { error: "API retornou formato inválido", raw: text },
      { status: 500 }
    );
  }
}
