import { useEffect, useState } from "react";

function ContactForm() {
  const [servicio, setServicio] = useState("");

  useEffect(() => {
    const actualizarServicio = () => {
      const servicioGuardado =
        localStorage.getItem("servicioSeleccionado");

      if (servicioGuardado) {
        setServicio(
          servicioGuardado
            .replace("SERVICIO - ", "")
            .replace("SERVICIO &#8211; ", "")
        );
      }
    };

    actualizarServicio();

    window.addEventListener(
      "storage",
      actualizarServicio
    );

    window.addEventListener(
      "servicioCambiado",
      actualizarServicio
    );

    return () => {
      window.removeEventListener(
        "storage",
        actualizarServicio
      );

      window.removeEventListener(
        "servicioCambiado",
        actualizarServicio
      );
    };
  }, []);

  return (
    <section
      id="contacto"
      style={{ padding: "20px" }}
    >
      <h2>Contacto</h2>

      <form>
        <input
          type="text"
          placeholder="Nombre"
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Correo"
          required
        />

        <br /><br />

        <input
          type="text"
          value={servicio}
          readOnly
          placeholder="Servicio"
        />

        <br /><br />

        <textarea
          placeholder="Mensaje"
          required
        />

        <br /><br />

        <button type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactForm;