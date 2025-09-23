import userIcon from "../assets/userIcon.png"

function Header() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    function logoutUser() {
        localStorage.clear();
        location.reload();
    }

    if (!user) {
        return (
            <div className="header">
                <h1>Expense Tracker</h1>
                <div className="headerButtons">
                    <button className="headerButton">Register</button>
                    <button className="headerButton">Log In</button>
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