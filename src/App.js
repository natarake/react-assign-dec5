import Navbar from "./components/Navbar";
import TopBar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Mails from "./pages/Mails";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/react-assign-dec5" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mails" element={<Mails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
