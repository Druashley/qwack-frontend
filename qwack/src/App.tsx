import { Routes, Route, Link } from "react-router-dom";
import { SoundboardPage } from "./pages/soundboard";

function HomePage() {
  return (
    <div>
      <Link to="/soundboard">Click here to Soundboard</Link>
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soundboard" element={<SoundboardPage />} />
    </Routes>
  );
}

export default App;
