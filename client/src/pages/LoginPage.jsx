import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault();
        
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username: username, password: password})
            }); 

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const resBody = await response.json();
            localStorage.setItem("user", JSON.stringify(resBody.data));

            navigate("/");

        } catch(error) {
            console.log(error.message);
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