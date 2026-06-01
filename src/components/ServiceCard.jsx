function ServiceCard({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{title}</h2>

      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />

        <button
        onClick={() => {
            const formulario = document.getElementById("contacto");

            if (formulario) {
            formulario.scrollIntoView({
                behavior: "smooth",
            });
            }
localStorage.setItem(
  "servicioSeleccionado",
  title
);

window.dispatchEvent(
  new Event("servicioCambiado")
);
        }}
        >
        Contáctanos
        </button>
    </div>
  );
}

export default ServiceCard;