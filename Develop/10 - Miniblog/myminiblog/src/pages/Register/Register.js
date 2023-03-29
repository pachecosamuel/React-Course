import styles from "./Register.module.css"
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";


const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading, auth } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName: displayName,
            email: email,
            password,
        };

        if (password !== confirmPassword) {
            setError("The password and its confirmation needs to be the same!");
            return;
        };

        const response = await createUser(user);

        console.log(response);
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.register}>
            <h1>Register to post</h1>
            <p>Create your user and share your stories</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Type your name: </span>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
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
                <label>
                    <span>Confirm your password: </span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                
                {!loading && <button className="btn"> Register </button>}
                {loading && <button className="btn" disabled> Wait </button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
};

export default Register;