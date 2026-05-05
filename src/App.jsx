import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CursorFollower />
      <main className="min-h-screen bg-background relative selection:bg-green-500/30">
        {/* Global Background Noise/Texture */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
