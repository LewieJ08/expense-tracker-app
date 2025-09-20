function Header() {
    const user = localStorage.getItem("user");

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
                <button className="loginButton">Log Out</button>
            </div>
        </div>
    )
}

export default Header