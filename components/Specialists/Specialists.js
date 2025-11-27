"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    axios.get("/api/specialists")
      .then(res => setSpecialists(res.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div className="contact-container" id="contact">
      <h2>Specialistai</h2>

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
