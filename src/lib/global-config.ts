
export async function getConfigValue(key: string): Promise<string | undefined> {
  const configId = process.env.GLOBAL_CONFIG_ID;
  const teamId = process.env.VERCEL_TEAM_ID;
  const readToken = process.env.GLOBAL_CONFIG_READ_TOKEN;

  const url = `https://global-config.vercel.com/${configId}/item/${key}${teamId ? `?teamId=${teamId}` : ""}`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${readToken}` },
      cache: "no-store",
    });
    if (!res.ok) return undefined;
    return res.json();
  } catch {
    return undefined;
  }
}

export async function setConfigValue(key: string, value: string, exists: boolean) {
  const configId = process.env.GLOBAL_CONFIG_ID;
  const token = process.env.VERCEL_API_TOKEN;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!configId) {
    throw new Error("GLOBAL_CONFIG_ID no está definido");
  }
  if (!token) {
    throw new Error("VERCEL_API_TOKEN no está definido");
  }

  const url = `https://api.vercel.com/v1/global-config/${configId}/items${teamId ? `?teamId=${teamId}` : ""}`;

  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          operation: exists ? "update" : "create",
          key,
          value,
        },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`No se pudo actualizar la configuración: ${res.status} — ${body}`);
  }
}