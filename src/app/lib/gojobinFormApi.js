export async function submitGojobinForm(payload) {
  const response = await fetch("/api/gojobin-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.message || data?.error || "Unable to submit enquiry right now.",
    );
  }

  return data;
}
