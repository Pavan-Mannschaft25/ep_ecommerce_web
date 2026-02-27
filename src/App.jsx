// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Fitness from "./pages/Fitness";
// import Shop from "./pages/Shop";
// import AppPreview from "./pages/AppPreview";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import ScrollToTop from "./components/ScrollToTop";
// import FranchisePage from "./pages/FranchisePage";
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <ScrollToTop />
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/fitness" element={<Fitness />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/app-preview" element={<AppPreview />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/franchises" element={<FranchisePage />} />
//           </Routes>
//         </main>
//         <Footer />
//         <a
//           href="https://wa.me/916305070487"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
//         >
//           <FaWhatsapp size={42} />
//         </a>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Shop from "./pages/Shop";
import AppPreview from "./pages/AppPreview";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import FranchisePage from "./pages/FranchisePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/app-preview" element={<AppPreview />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchises" element={<FranchisePage />} />
          </Routes>
        </main>
        <Footer />
        <a
          href="https://wa.me/916305070487"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
        >
          <FaWhatsapp size={42} />
        </a>
      </div>
    </Router>
  );
}

export default App;
