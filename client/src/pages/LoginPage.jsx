import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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
                if (response.status === 401) {
                    const resBody = await response.json();
                    setError(resBody.error);
                    return;
                } else {
                    throw new Error(`Response status: ${response.status}`);
                }
            }

            const resBody = await response.json();
            localStorage.setItem("user", JSON.stringify(resBody.data));

            navigate("/");

        } catch(error) {
            console.log(error.message);
            throw error;
        }
    }
    return (
        <div className="loginForm">
            <h2>Log In</h2>
            <form onSubmit={loginUser}>
                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button className="formButton" type="submit">Log In</button>
            </form>

            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    )
}

export default Login