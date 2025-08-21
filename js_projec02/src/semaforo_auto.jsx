import { useState, useEffect } from "react"

const SemaforoAutomatico = () => {
  const colores = ["red", "yellow", "green", "yellow"] // orden natural
  const [indice, setIndice] = useState(0)

  // cambia automáticamente cada 2 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % colores.length)
    }, 1000)

    // limpiar el intervalo cuando se desmonta el componente
    return () => clearInterval(intervalo)
  }, [])

  const colorActual = colores[indice]

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: colorActual,
          margin: "20px auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}
      ></div>
    </div>
  );
};

export default SemaforoAutomatico
