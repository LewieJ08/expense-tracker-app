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
                    <button className="loginButton">Register</button>
                    <button className="loginButton">Log In</button>
                </div>
            </div>
        )
    }

    return (
        <div className="header">
            <h1>Expense Tracker</h1>
            <div className="headerButtons">
                <p>{user.username}</p>
                <button onClick={logoutUser} className="loginButton">Log Out</button>
            </div>
        </div>
    )
}

export default Header