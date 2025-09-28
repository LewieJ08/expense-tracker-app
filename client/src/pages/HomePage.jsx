import Header from "../components/Header"

function Home() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    
    return (
        <div>
            <Header user={user}/>
            <main>
                {!user && 
                    <h3 className="notLoggedInText">
                        <b>Create an account</b> or <b>Log In</b> to start tracking expenses
                    </h3>
                }
            </main>
        </div>
    )
}

export default Home