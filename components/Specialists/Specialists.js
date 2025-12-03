"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import "./styles.scss";

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const fetchSpecialists = async () => {
      const { data, error } = await supabase
        .from("specialists")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Supabase fetch error:", error);
      } else {
        setSpecialists(data || []);
      }
    };

    fetchSpecialists();
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
