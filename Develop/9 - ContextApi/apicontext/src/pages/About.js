// styles
import styles from "./About.module.css";

// 4 -> Refactoring with hooks
import { useCounterContext } from "../hooks/useCounterContext";

// 5 -> Context more complex
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
    const { counter } = useCounterContext();
    const { color, dispatch } = useTitleColorContext();

    // 6 -> Changing the complex state
    const setTitleColor = (color) => {
        dispatch({type: color});
    };

    return (
        <div>
            <h2 style={{color: color}}>ABOUT</h2>
            <p>Valor do contador : {counter}</p>

            <div>
                <button onClick={() => setTitleColor("RED")}>Red</button>
                <button onClick={() => setTitleColor("BLUE")}>Blue</button>
            </div>
        </div>
    )
};

export default About;