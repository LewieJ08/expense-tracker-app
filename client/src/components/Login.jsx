import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(e) {
        e.preventDefault();
        
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username: username, password: password})
            }); 

            if (!response.ok) {
                throw new Error("Response Error");
            }

            const user = await response.json();
            localStorage.setItem("user", user);

        } catch(error) {
            throw error;
        }
    }
    return (
        <div className="loginForm">
            <form onSubmit={loginUser}>
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
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login