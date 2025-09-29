import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currency, setCurrency] = useState("GBP");
    const [error, setError] = useState("");
    const navigate = useNavigate();

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
                body: JSON.stringify({
                    username: username, 
                    password: password,
                    currency: currency
                })
            });

            if (!response.ok) {
                if (response.status === 400) {
                    const resBody = await response.json();
                    setError(resBody.error);
                    return;
                } else {
                    throw new Error(`Response status: ${response.status}`);
                }
            } 

            const data = await response.json();
            console.log("Registered:", data);

            navigate("/login")

        } catch(error) {
            console.log(error.message);
            throw error;
        }
    } 

    return (
        <div className="loginForm">
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <br />
                <input 
                    type="password"  
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)}
                    required
                /> 
                <br />
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <br />
                <p>Please select your preferred currency from the drop down below.</p>
                <select 
                    placeholder="Currency" id="formSelect"
                    onChange={e => setCurrency(e.target.value)}
                >
                    <option value="GBP">GBP (£)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="JPY">JPY (¥)</option>
                </select>
                <br />
            
                <button className="formButton" type="submit">Register</button>
            </form>

            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    )
}

export default Register