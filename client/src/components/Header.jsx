function Header(props) {
    return (
        <div className="header">
            <h1>Expense Tracker</h1>
            <div className="loginButtons">
                <button className="loginButton">Register</button>
                <button className="loginButton">Log In</button>
            </div>
        </div>
    )
}

export default Header