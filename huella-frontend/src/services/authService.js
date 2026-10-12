import { demoUsers, DEMO_PASSWORD } from "../features/auth/demoUsers";

export async function login(arg1, arg2) {
  const { email, password } =
    typeof arg1 === "string" ? { email: arg1, password: arg2 } : arg1 ?? {};

  const normalizedEmail = String(email ?? "").trim().toLowerCase();
  const normalizedPassword = String(password ?? "");

  await new Promise((r) => setTimeout(r, 600)); // simula latencia de red

  const user = demoUsers.find((u) => u.email === normalizedEmail);
  if (!user || normalizedPassword !== DEMO_PASSWORD) {
    throw new Error("Credenciales incorrectas");
  }
  return { token: "demo-token", user };
}