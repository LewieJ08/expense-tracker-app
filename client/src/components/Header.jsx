import userIcon from "../assets/userIcon.png"
import { Link } from "react-router-dom";

function Header() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    async function logoutUser() {

        try {
            const response = await fetch("/api/users/logout", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`
                },
                body: JSON.stringify({username: user.username})
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }

        } catch(error) {
            console.log(error.message);
        }

        localStorage.clear();
        location.reload();
    }

    if (!user) {
        return (
            <div className="header">
                <h1>Expense Tracker</h1>
                <div className="headerButtons">
                    <Link to="/register"><button className="headerButton">Register</button></Link>
                    <Link to="/login"><button className="headerButton">Log In</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className="header">
            <h1>Expense Tracker</h1>
            <div className="headerButtons">
                <div className="userInfo">
                    <img src={userIcon} className="userIcon"/>
                    <p id="headerUsername">{user.username}</p>
                </div>
                <button onClick={logoutUser} className="headerButton">Log Out</button>
            </div>
        </div>
    )
}

export default Header