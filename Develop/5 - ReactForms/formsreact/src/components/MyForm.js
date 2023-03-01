import styles from "./MyForm.module.css";
import { useState } from "react";

const MyForm = ({user}) => {

    // Controlled input
    const [name, setName] = useState(user.name ? user.name : "");
    const [email, setEmail] = useState(user.email ? user.email : "");
    const [bio, setBio] = useState(user.bio ? user.bio : "");
    const [role, setRole] = useState(user.role ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Seeding the form");
        console.log(name, email, bio, role);

        // Validação
        // Envio

        // 7 -> Limpar os forms
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

    return (
        <div>
            {/* 5 - handle Submit */}
            {/* 1° - criação do form */}
            <form className={styles.my_form} onSubmit={handleSubmit}>
                <div style={{borderBottom: "10px"}}>
                    <label className={styles.my_label} htmlFor="name">Your name: </label>
                    {/* Manipulação de valores através do onChange */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Type your name"
                        onChange={handleName}
                        value={name}
                    />
                </div>

                {/* 2° - Label envolvendo o input */}
                <label htmlFor="">
                    <span>E-mail</span>
                    {/* Simplicação de manipulação de valores */}
                    <input
                        type="email"
                        name="email"
                        placeholder="type your e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                {/* 8 -> Input de textarea */}
                <label>
                    <span>Biography</span>
                    <textarea 
                        name="bio" 
                        placeholder="type your bio's description"
                        onChange={(e) => setBio(e.target.value)} 
                        value={bio}
                        ></textarea>
                </label>

                {/* 9 -> Input tipo select */}
                <label>
                    <span>Your role</span>
                    <select 
                    name="" 
                    id=""
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    >
                        <option value="User">User</option>
                        <option value="Dba">DBA</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label>


                <input type="submit" value="Send" />
            </form>
        </div>
    )
};

export default MyForm;