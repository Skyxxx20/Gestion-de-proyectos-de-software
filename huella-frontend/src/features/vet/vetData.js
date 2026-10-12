import { CalendarCheck, Clock, FileText, PawPrint } from "lucide-react";

export const stats = [
  { id: "consultas", label: "Consultas hoy", value: "8", icon: CalendarCheck, tone: "mint",
    foot: { highlight: "3 completadas", color: "success" } },
  { id: "proximo", label: "Próximo paciente", value: "10:15", icon: Clock, tone: "blue",
    foot: { prefix: "Bruno · Control", highlight: "", color: "ink" } },
  { id: "historias", label: "Historias pendientes", value: "2", icon: FileText, tone: "rose",
    foot: { highlight: "Completar hoy", color: "success" } },
  { id: "vacunas", label: "Vacunas hoy", value: "4", icon: PawPrint, tone: "lilac",
    foot: { prefix: "Una próxima", highlight: "", color: "ink" } },
];

// status: "in_consult" | "waiting" | "confirmed"
export const consultations = [
  { id: 1, time: "09:30", period: "AM", pet: "Milo", initials: "MI", tone: "mint",
    detail: "Vacunación · Gato", owner: "Lucía Torres", status: "in_consult" },
  { id: 2, time: "10:15", period: "AM", pet: "Bruno", initials: "BR", tone: "blue",
    detail: "Control general · Perro", owner: "Daniel Rojas", status: "waiting" },
  { id: 3, time: "11:00", period: "AM", pet: "Luna", initials: "LU", tone: "peach",
    detail: "Dermatología · Perro", owner: "Sofía Márquez", status: "confirmed" },
  { id: 4, time: "11:45", period: "AM", pet: "Coco", initials: "CO", tone: "lilac",
    detail: "Desparasitación · Conejo", owner: "Martín Vega", status: "confirmed" },
];

export const records = [
  { id: 1, day: "18", month: "JUN", year: "2025", pet: "Luna", owner: "Sofía Márquez",
    title: "Consulta dermatológica", summary: "Dermatitis alérgica. Se indica control en 15 días." },
  { id: 2, day: "12", month: "JUN", year: "2025", pet: "Bruno", owner: "Daniel Rojas",
    title: "Control general", summary: "Paciente estable. Peso y signos vitales dentro de rango." },
  { id: 3, day: "03", month: "JUN", year: "2025", pet: "Milo", owner: "Lucía Torres",
    title: "Vacunación", summary: "Aplicada vacuna triple felina, lote TF-2048." },
];

export const prescriptions = [
  { id: 1, pet: "Nala", title: "Meloxicam 1 mg", detail: "Cada 24 horas · 5 días" },
  { id: 2, pet: "Luna", title: "Champú medicado", detail: "Baño terapéutico · 2 veces/semana" },
  { id: 3, pet: "Bruno", title: "Condroprotector", detail: "1 tableta diaria · 30 días" },
];

export const vaccines = [
  { id: 1, pet: "Milo", initials: "MI", owner: "Lucía Torres", vaccine: "Triple felina",
    last: "03 jun 2025", next: "03 jun 2026" },
  { id: 2, pet: "Nala", initials: "NA", owner: "Camila Ortega", vaccine: "Múltiple canina",
    last: "21 jun 2024", next: "21 jun 2025" },
  { id: 3, pet: "Bruno", initials: "BR", owner: "Daniel Rojas", vaccine: "Rabia",
    last: "10 ene 2025", next: "10 ene 2026" },
  { id: 4, pet: "Luna", initials: "LU", owner: "Sofía Márquez", vaccine: "Bordetella",
    last: "14 mar 2025", next: "14 sep 2025" },
];