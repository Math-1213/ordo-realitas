import { colors } from "../../colors";

export const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: `1px solid ${colors.secondary.fear}`,
  backgroundColor: colors.backgroundSecondary,
  color: colors.textPrimary,
  fontSize: "16px",
  outline: "none",
};

export const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: colors.secondary.fear,
  color: "currentColor", 
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "all 0.3s ease",
};

