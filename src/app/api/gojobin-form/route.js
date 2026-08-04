const GOJOBIN_API_BASE_URL = (
  process.env.GOJOBIN_API_BASE_URL || "http://localhost:5000"
).replace(/\/+$/, "");

function parseResponseBody(text) {
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid enquiry request." }, { status: 400 });
  }

  try {
    const response = await fetch(`${GOJOBIN_API_BASE_URL}/api/gojobin-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const text = await response.text();

    return Response.json(parseResponseBody(text), { status: response.status });
  } catch {
    return Response.json(
      { message: "Unable to reach the GoJobin enquiry API." },
      { status: 502 },
    );
  }
}
