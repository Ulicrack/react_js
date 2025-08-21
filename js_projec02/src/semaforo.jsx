import { useState } from "react"

const Semaforo = () => {
  const [color, setColor] = useState("red") // color inicial del semáforo

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Circulo del semáforo */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: color,
          margin: "20px auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}
      ></div>

      {/* Botones */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => setColor("red")}
          disabled={color === "red"}
          style={{
            backgroundColor: "red",
            color: "white",
            cursor: color === "red" ? "not-allowed" : "pointer",
            opacity: color === "red" ? 0.6 : 1
          }}
        >
          Rojo
        </button>

        <button
          onClick={() => setColor("yellow")}
          disabled={color === "yellow"}
          style={{
            backgroundColor: "gold",
            color: "black",
            cursor: color === "yellow" ? "not-allowed" : "pointer",
            opacity: color === "yellow" ? 0.6 : 1
          }}
        >
          Amarillo
        </button>

        <button
          onClick={() => setColor("green")}
          disabled={color === "green"}
          style={{
            backgroundColor: "green",
            color: "white",
            cursor: color === "green" ? "not-allowed" : "pointer",
            opacity: color === "green" ? 0.6 : 1
          }}
        >
          Verde
        </button>
      </div>
    </div>
  )
}

export default Semaforo
