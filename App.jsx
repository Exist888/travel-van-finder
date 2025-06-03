import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Vans } from "./pages/Vans.jsx";
import { VanDetail } from "./pages/VanDetail.jsx";
import { HostLayout } from "./pages/host/HostLayout.jsx";
import { Dashboard } from "./pages/host/Dashboard.jsx";
import { Income } from "./pages/host/Income.jsx";
import { Reviews } from "./pages/host/Reviews.jsx";
import "./server.js";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/vans" element={<Vans/>}/>
                    <Route path="/vans/:id" element={<VanDetail/>}/>
                    <Route path="/host" element={<HostLayout/>}>
                        <Route path="/host/dashboard" element={<Dashboard/>}/>
                        <Route path="/host/income" element={<Income/>}/>
                        <Route path="/host/reviews" element={<Reviews/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}