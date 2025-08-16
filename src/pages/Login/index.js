import { useState } from "react";

const colors = {
  secondary: {
    fear: "#c3c9d2ff",
    knowledge: "#f0e68c",
    blood: "#c12124",
    death: "#4d4946",
    energy: "#904298",
  },
  textPrimary: "#eee",
  backgroundPrimary: "#222",
};

const themes = [
  { key: "fear", label: "Medo", color: colors.secondary.fear },
  { key: "knowledge", label: "Conhecimento", color: colors.secondary.knowledge },
  { key: "blood", label: "Sangue", color: colors.secondary.blood },
  { key: "death", label: "Morte", color: colors.secondary.death },
  { key: "energy", label: "Energia", color: colors.secondary.energy },
];

export default function Login() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0].key);
  const [playerType, setPlayerType] = useState("player");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const current = themes.find((t) => t.key === selectedTheme);

  const handleLogin = () => {
    console.log({ name, password, token, playerType, theme: selectedTheme });
  };

  return (
    <>
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes bloodDrop {
          0% { transform: translateY(0); opacity: 0.8; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes liquidWobble {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -5px) scale(1.05); }
        }
        @keyframes energyGlow {
          0%, 100% { box-shadow: 0 0 20px 5px rgba(144, 66, 152, 0.7); }
          50% { box-shadow: 0 0 40px 10px rgba(144, 66, 152, 1); }
        }
        @keyframes knowledgeScrollLTR {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        @keyframes knowledgeScrollRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100vw); }
        }
      `}</style>

      <div
        style={{
          height: "100vh",
          backgroundColor: current.color,
          color: colors.textPrimary,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "background-color 0.8s ease-in-out",
          padding: "20px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        {/* Selector */}
        <div style={{ marginBottom: 20, zIndex: 2 }}>
          <label htmlFor="theme-select" style={{ marginRight: 10, fontWeight: "bold" }}>
            Escolha o tema:
          </label>
          <select
            id="theme-select"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: "none",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            {themes.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <Effects type={current.key} />

        <div
          style={{
            backgroundColor: colors.backgroundPrimary,
            padding: "30px",
            borderRadius: "12px",
            border: `2px solid ${colors.secondary.fear}`,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
            width: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1 style={{ marginBottom: "25px" }}>Ordo Realitas - Login</h1>

          <input
            type="text"
            placeholder="Nome do Jogador"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Token da Sala"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={inputStyle}
          />

          <div
            style={{
              margin: "20px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <label>Entrar como GM/Admin</label>
            <input
              type="checkbox"
              checked={playerType === "gm"}
              onChange={() =>
                setPlayerType(playerType === "player" ? "gm" : "player")
              }
              style={{ width: 22, height: 22, cursor: "pointer" }}
            />
          </div>

          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  margin: "8px 0",
  padding: "12px",
  width: "100%",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "12px 25px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#555",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

function Effects({ type }) {
  switch (type) {
    case "fear":
      return <FearEffect />;
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

function FearEffect() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.05)",
        animation: "pulseGlow 4s ease-in-out infinite",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

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

  const linesCount = 10;
  const lines = Array.from({ length: linesCount });
  const repeatedText = phrases.join(" • ") + " • ";

  const randomStyle = (index) => {
    const top = Math.random() * 80; // em %
    const direction = Math.random() > 0.5 ? "ltr" : "rtl";
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * -20;

    return {
      top: `${top}%`,
      animationName: direction === "ltr" ? "knowledgeScrollLTR" : "knowledgeScrollRTL",
      animationDuration: `${duration}s`,
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationDelay: `${delay}s`,
      position: "absolute",
      whiteSpace: "nowrap",
      left: direction === "ltr" ? "-100%" : "auto",
      right: direction === "rtl" ? "-100%" : "auto",
      fontFamily: "monospace",
      fontSize: "22px",
      color: "rgba(255, 255, 255, 0.8)",
      textShadow: "0 0 6px rgba(0, 0, 0, 1)",
      userSelect: "none",
      pointerEvents: "none",
      overflow: "visible",
    };
  };

  return (
    <>
      {lines.map((_, i) => (
        <div key={i} style={randomStyle(i)} aria-hidden="true">
          {repeatedText.repeat(5)}
        </div>
      ))}
    </>
  );
}

function BloodEffect() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "8px",
            height: "12px",
            backgroundColor: "rgba(193, 33, 36, 0.6)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            left: `${Math.random() * 100}%`,
            animation: `bloodDrop ${4 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 4}s`,
            top: "-15px",
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}

function DeathEffect() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at center, rgba(77, 73, 70, 0.6), transparent 70%)",
        filter: "blur(8px)",
        animation: "liquidWobble 6s ease-in-out infinite",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

function EnergyEffect() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
        background:
          "radial-gradient(circle at 80% 50%, rgba(144, 66, 152, 0.3), transparent 70%)," +
          "repeating-linear-gradient(45deg, rgba(144, 66, 152, 0.5) 0, rgba(144, 66, 152, 0.5) 2px, transparent 2px, transparent 6px)",
        animation: "energyGlow 3s ease-in-out infinite",
        boxShadow: "0 0 20px 5px rgba(144, 66, 152, 0.7)",
      }}
    />
  );
}
