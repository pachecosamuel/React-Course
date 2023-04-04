import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, error: authError, loading, auth } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email: email,
            password,
        };

        const response = await login(user);

        console.log(response);
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <p>Login to share your ideas</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Type your email: </span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your best email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Type your password: </span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className="btn"> Login </button>}
                {loading && <button className="btn" disabled> Wait </button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
};

export default Login;