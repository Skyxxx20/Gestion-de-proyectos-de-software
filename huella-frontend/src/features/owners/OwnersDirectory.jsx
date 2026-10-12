import { useMemo } from "react";
import PageHeader from "../../components/ui/PageHeader.jsx";
import { useSearch } from "../../components/layout/SearchContext.jsx";
import { patients } from "../patients/patientsData";
import "./owners.css";

const normalize = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const initialsOf = (fullName) =>
  fullName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function OwnersDirectory() {
  const { query } = useSearch();

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return patients;
    return patients.filter((p) => normalize(`${p.owner} ${p.name} ${p.phone}`).includes(q));
  }, [query]);

  return (
    <div className="dash">
      <PageHeader />

      <section className="card">
        <header className="card__head card__head--center">
          <div>
            <h2>Usuarios y propietarios</h2>
            <p>Contactos registrados en Huella</p>
          </div>
          <span className="pill pill--ok">846 activos</span>
        </header>

        {results.length === 0 ? (
          <p className="empty">No se encontraron usuarios para “{query}”.</p>
        ) : (
          <ul className="owners">
            {results.map((p) => (
              <li className="owner" key={p.id}>
                <span className="pet-avatar pet-avatar--lg tone-mint">{initialsOf(p.owner)}</span>
                <div className="owner__info">
                  <strong>{p.owner}</strong>
                  <small>{p.phone} · {p.name}</small>
                </div>
                <span className="owner__role">Propietario</span>
                <button className="btn-outline">Editar</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}