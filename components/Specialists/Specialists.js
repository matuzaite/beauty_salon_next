"use client";

import { useEffect, useState } from "react";
import "./styles.scss";

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const res = await fetch("/api/specialists", { cache: "no-store" });
        if (!res.ok) {
          const payload = await res.json().catch(() => ({}));
          throw new Error(payload.error || `Request failed: ${res.status}`);
        }
        const data = await res.json();
        setSpecialists(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Specialists API error:", err);
        setErrorMsg("Nepavyko įkelti specialistų.");
      }
    };

    fetchSpecialists();
  }, []);

  return (
    <div className="contact-container" id="contact">
      <h2>Specialistai</h2>

      {errorMsg && <div className="error-note">{errorMsg}</div>}

      <table className="professionals-table">
        <tbody>
          {specialists.map(sp => (
            <tr key={sp.id}>
              <td>
                <strong className="name">{sp.name}</strong>
                <div className="position">{sp.specialization}</div>
              </td>

              <td>
                <a href={`tel:${sp.phone}`} className="call-btn">
                  Skambinti
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specialists;
