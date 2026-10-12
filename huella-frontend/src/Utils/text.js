// Compara sin distinguir mayúsculas ni tildes
export const normalize = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();