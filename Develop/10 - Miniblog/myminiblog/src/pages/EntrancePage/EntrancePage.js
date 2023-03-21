// css
import styles from "./EntrancePage.module.css";
// resources
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login/Login";
import Register from "../Register/Register"
// components
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";


const EntrancePage = () => {
    return (
        <div>
            <h1>Test</h1>
            <BrowserRouter>
            <NavBar/>
                <div className={styles.container}>
                    <Routes >
                        <Route path="/home" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/login" element={<Login />}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    )
};

export default EntrancePage;