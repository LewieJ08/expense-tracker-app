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

    // TODO add update user detail func
    
    return (
        <div className="header">
            <h1>Expense Tracker</h1>
            <div className="headerButtons">
                <button onClick={logoutUser} className="headerButton">Log Out</button>
                <button className="headerButton">
                    <img src={userIcon}/>
                    <p>{user.username}</p>
                </button>
            </div>
        </div>
    )
}

export default Header