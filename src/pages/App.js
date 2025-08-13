import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/:roomId" element={<Admin />} />
        <Route path="/game/:roomId" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
