import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { colors, getContrastElementColor } from "../../colors";
import { inputStyle, buttonStyle } from "./styles";

export default function Login() {
  const [playerType, setPlayerType] = useState("player");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [theme, setTheme] = useState("fear");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("User: ", { name, password, token, playerType, theme });
    let route;
    switch (playerType) {
      case "player":
        route = `game/${token}`
        break;

      case "gm":
        route = `admin/${token}`
        break;

      default:
        console.log("Erro: Jogador Tipo ", playerType)
        break;

    }
    navigate(route)
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: colors.secondary[theme],
        color: colors.textPrimary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 3s ease-in-out",
        padding: "20px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Effects type={theme} />

      <div
        style={{
          backgroundColor: getContrastElementColor(theme, colors),
          padding: "30px",
          borderRadius: "12px",
          border: `2px solid ${colors.secondary[theme]}`,
          boxShadow: `0 0 15px ${colors.secondary[theme]}55`,
          width: "340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          color: colors.secondary[theme], // textos no tom do tema
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Ordo Realitas - Login</h1>

        <style>{`
          .custom-placeholder::placeholder {
            color: ${colors.secondary[theme]};
            opacity: 1;
          }
        `}</style>

        <input
          type="text"
          placeholder="Nome do Jogador"
          value={name}
          className="custom-placeholder"
          onChange={(e) => setName(e.target.value)}
          style={{
            ...inputStyle,
            border: `2px solid ${colors.secondary[theme]}`,
            color: colors.secondary[theme],
            backgroundColor: getContrastElementColor(theme, colors)

          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          className="custom-placeholder"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            ...inputStyle,
            border: `2px solid ${colors.secondary[theme]}`,
            color: colors.secondary[theme],
            backgroundColor: getContrastElementColor(theme, colors)
          }}
        />

        <input
          type="text"
          placeholder="Token da Sala"
          value={token}
          className="custom-placeholder"
          onChange={(e) => setToken(e.target.value)}
          style={{
            ...inputStyle,
            border: `2px solid ${colors.secondary[theme]}`,
            color: colors.secondary[theme],
            backgroundColor: getContrastElementColor(theme, colors)
          }}
        />

        <div
          style={{
            margin: "15px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: colors.secondary[theme],
          }}
        >
          <label>Entrar como GM/Admin</label>
          <input
            type="checkbox"
            checked={playerType === "gm"}
            onChange={() =>
              setPlayerType(playerType === "player" ? "gm" : "player")
            }
            style={{
              width: 22,
              height: 22,
              cursor: "pointer",
              accentColor: colors.secondary[theme],
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Tema: </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: "6px",
              borderRadius: "6px",
              border: `1px solid ${colors.secondary[theme]}`,
              color: colors.secondary[theme],
              backgroundColor: getContrastElementColor(theme, colors),
            }}
          >
            <option value="fear">Medo</option>
            <option value="knowledge">Conhecimento</option>
            <option value="blood">Sangue</option>
            <option value="death">Morte</option>
            <option value="energy">Energia</option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          style={{
            ...buttonStyle,
            color: colors.secondary[theme], // texto no tom do tema
            backgroundColor: getContrastElementColor(theme, colors), // fundo contraste
            border: `1px solid ${colors.secondary[theme]}`,
          }}
        >
          Login
        </button>
      </div>
    </div>
  );

}

function Effects({ type }) {
  switch (type) {
    case "knowledge":
      return <KnowledgeEffect />;
    case "blood":
      return <BloodEffect />;
    case "death":
      return <DeathEffect />;
    case "energy":
      return <EnergyEffect />;
    default:
      return null;
  }
}

/* ---- EFEITOS ---- */

// Conhecimento = textos desfilando 
function KnowledgeEffect() {
  const phrases = [
    "Saber tudo é perder tudo",
    "O conhecimento é a entidade da consciência",
    "Descobrir, decifrar, entender, aprender",
    "O Outro Lado revela suas verdades ocultas",
    "Os Sigilos do Outro Lado guardam segredos imensuráveis",
    "Transcender é conectar-se com a linguagem do conhecimento",
    "A mente que decifra demais pode enlouquecer",
    "Criaturas de conhecimento desafiam a realidade física",
    "A linha entre realidade e paranormal se torna tênue",
    "O conhecimento manipula a consciência humana",
    "Rituais de conhecimento reescrevem o código da realidade",
    "Inexistir: apagar alguém do tecido da existência",
    "O Outro Lado domina regras da física e da razão",
    "A entidade de conhecimento é ordem, lógica e razão",
    "Pergaminhos e sigilos são portas para o desconhecido",
    "Memórias e sonhos se entrelaçam com o Outro Lado",
    "O conhecimento traz calmaria e desespero simultâneos",
    "Olhos dourados revelam a profundidade do saber oculto",
    "Alucinações são manifestações da verdade esquecida",
    "O ruído do Outro Lado é um coro de vozes desesperadas",
    "Milhões de histórias gritam a verdade impossível",
    "A verdade que você deveria ter esquecido ecoa no silêncio",
    "A consciência é a chave para desvendar os segredos do Outro Lado",
    "A apatia do conhecedor é o preço do saber infinito",
    "Máscaras escondem o rosto da verdadeira sabedoria",
    "Sonhos e sussurros contam histórias perdidas no tempo",
    "A razão dobra-se perante a vastidão do Outro Lado",
  ];
  const linesCount = 16;
  const repeatedText = phrases.join(" • ") + " • ";

  const randomStyle = () => {
    const top = Math.random() * 100;
    const direction = Math.random() > 0.5 ? "ltr" : "rtl";
    const duration = 100 + Math.random() * 100;
    return {
      top: `${top}%`,
      animationName: direction === "ltr" ? "scrollLTR" : "scrollRTL",
      animationDuration: `${duration}s`,
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      position: "absolute",
      whiteSpace: "nowrap",
      fontFamily: "monospace",
      fontSize: "20px",
      color: "rgba(255,255,255,0.85)",
      textShadow: "0 0 6px black",
      letterSpacing: "4px",
    };
  };

  return (
    <>
      <style>{`
        @keyframes scrollLTR { 0%{transform:translateX(-100%)} 100%{transform:translateX(100vw)} }
        @keyframes scrollRTL { 0%{transform:translateX(100vw)} 100%{transform:translateX(-100%)} }
      `}</style>
      {Array.from({ length: linesCount }).map((_, i) => (
        <div key={i} style={randomStyle()}>
          {repeatedText.repeat(3)}
        </div>
      ))}
    </>
  );
}

// Sangue = gotas caindo translúcidas
function BloodEffect() {
  return (
    <>
      <style>{`
        @keyframes bloodDrop {
          0% { transform: translateY(-10%); opacity: 0.9; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
      `}</style>
      {Array.from({ length: 25 }).map((_, i) => {
        const size = 6 + Math.random() * 6;
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * -8;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "-20px",
              left: `${left}%`,
              width: size,
              height: size * 1.8,
              background: "rgba(180,0,0,0.7)",
              borderRadius: "50% 50% 50% 50%",
              animation: `bloodDrop ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </>
  );
}

// Morte = espiral rodando
const DeathEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 2;

      ctx.beginPath();

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Espiral
      for (let i = 0; i < 300; i++) {
        const radius = i * 2;
        const x = centerX + radius * Math.cos(i * 0.2 + angle);
        const y = centerY + radius * Math.sin(i * 0.2 + angle);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();

      angle += 0.1; // velocidade da rotação
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  );
};

// Energia = raios piscando
function EnergyEffect() {
  return (
    <>
      <style>{`
        @keyframes lightning {
          0%, 90%, 100% { opacity: 0; }
          95% { opacity: 1; transform: scaleX(1.2); }
        }
      `}</style>
      {Array.from({ length: Math.floor(Math.random() * (100 - 10 + 1)) + 10 }).map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${y}%`,
              left: `${x}%`,
              width: "2px",
              height: "60px",
              background: "rgba(255,255,255,0.9)",
              transform: `rotate(${rotation}deg)`,
              animation: `lightning 3s infinite`,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 15px rgba(255,255,255,0.8)",
            }}
          />
        );
      })}
    </>
  );
}
