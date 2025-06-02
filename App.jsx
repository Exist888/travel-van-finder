import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";

export function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}