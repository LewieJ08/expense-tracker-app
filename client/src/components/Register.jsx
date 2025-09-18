import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")

    async function registerUser(e) {
        e.preventDefault();

        if (confirmPassword !== password) {
            setError("Passwords do not match")
            return;
        }

        try {
            const response = await fetch("/api/users/register", {
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
        <div className="registerForm">
            <form onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    type="password"  
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>

            {error && <p>{error}</p>}
        </div>
    )
}

export default Register