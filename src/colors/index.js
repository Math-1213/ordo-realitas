export const colors = {
    backgroundPrimary: "#121212", 
    backgroundSecondary: "#1E1E1E", 
    textPrimary: "#FFFFFF", 

    // Cores secundárias para personagens/admin
    secondary: {
        fear: "#fbfbfb",      
        knowledge: "#F4D442", 
        blood: "#C12124",     
        death: "#302e2dff",        
        energy: "#904298",
        energyGradient: {
            colors: ["#8A2BE2", "#00FF00", "#0000FF"], 
        },
    },

    // Cor terciária, controlada pelo GM durante o jogo
    tertiary: "#0400ffff", 
};

export function getContrastColor(hex) {
  // remove # se existir
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  // luminância relativa (W3C)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#121212" : "#FFFFFF"; 
}

export function getContrastElementColor(theme, colors) {
  const mapping = {
    fear: "rgba(114, 111, 111, 1)", 
    knowledge: "#9c8c4bff", 
    blood: "#651214ff", 
    death: "#c8bbb1ff", 
    energy: "#47204cff", 
  };

  return mapping[theme] || "#ffffffff"; // fallback caso não encontre
}
