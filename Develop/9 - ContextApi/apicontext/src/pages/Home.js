// style
import styles from "./Home.module.css";
import { ChangeCounter } from "../components/ChangeCounter";
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 -> Refactoring with hooks
import { useCounterContext } from "../hooks/useCounterContext"

// 5 -> Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color } = useTitleColorContext();
    
    return (
        <div>
            <h2 style={{color: color}}>HOME</h2>
            <p>Valor do contador : {counter}</p>
            {/* <ChangeCounter/> */}
        </div>
    )
};

export default Home;