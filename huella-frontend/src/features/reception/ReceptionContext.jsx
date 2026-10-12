import { createContext, useContext, useMemo, useState } from "react";
import { appointments as initialAppointments, BASE_WAITING } from "./receptionData";

const ReceptionContext = createContext(null);

export function ReceptionProvider({ children }) {
  const [appointments, setAppointments] = useState(initialAppointments);

  const value = useMemo(() => {
    const patch = (id, changes) =>
      setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, ...changes } : a)));

    const today = appointments.filter(
      (a) => a.dayOffset === 0 && a.status !== "cancelled"
    );

    return {
      appointments,
      today,
      waitingCount: BASE_WAITING + today.filter((a) => a.status === "waiting").length,
      registerArrival: (id) => patch(id, { status: "waiting" }),
      cancelAppointment: (id) => patch(id, { status: "cancelled" }),
    };
  }, [appointments]);

  return <ReceptionContext.Provider value={value}>{children}</ReceptionContext.Provider>;
}

export function useReception() {
  const ctx = useContext(ReceptionContext);
  if (!ctx) throw new Error("useReception debe usarse dentro de <ReceptionProvider>");
  return ctx;
}