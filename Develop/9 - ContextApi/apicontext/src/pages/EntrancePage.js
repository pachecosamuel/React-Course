// styles
import styles from "./EntrancePage.module.css";
// cfg
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
// pages
import Home from "./Home";
import About from "./About";
// components
import NavBar from "../components/NavBar";
import { ChangeCounter } from "../components/ChangeCounter";
// context
import { CounterContext } from "../context/CounterContext";


const EntrancePage = () => {

    const { counter } = useContext(CounterContext);

    return (
        <div className={styles.my_container}>
            <h1>Context API! : {counter}</h1>
            <ChangeCounter />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <h3>Meu rodapé</h3>
            </BrowserRouter>
        </div>
    )
};

export default EntrancePage;