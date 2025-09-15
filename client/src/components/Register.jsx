import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(e) {
        e.preventDefault();

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username: username, password: password})
            });

            if (!response.ok) {
                throw new Error("Error");
            } 

            const data = await response.json();
            console.log("Registered:", data);

        } catch(error) {
            throw error;
        }
    } 

    return (
        <div>
            <form onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    type="text"  
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register