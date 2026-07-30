import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import BrowseNotes from "./pages/BrowseNotes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={<BrowseNotes />} />
    </Routes>
  );
}

export default App;