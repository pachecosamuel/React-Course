// css
import styles from "./EntrancePage.module.css";
// resources
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
// pages
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login/Login";
import Register from "../Register/Register"
import CreatePost from "../CreatePost/CreatePost";
import Dashboard from "../Dashboard/Dashboard";
// components
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";


const EntrancePage = () => {

    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [auth]);

    if (loadingUser) {
        return <p>Loading ...</p>
    }

    return (
        <div>
            <h1>Test</h1>
            <AuthProvider value={{ user }}>
                <BrowserRouter>
                    <NavBar />
                    <div className={styles.container}>
                        <Routes >
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                            <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
                            <Route path="/dashboard" element={!user ? <Dashboard /> : <Navigate to="/login" />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
};

export default EntrancePage;