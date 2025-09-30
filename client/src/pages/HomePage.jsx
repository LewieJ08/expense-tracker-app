import Header from "../components/Header"
import ExpenseForm from "../components/ExpenseForm";

function Home() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    
    return (
        <div>
            <Header user={user} />
                {!user && 
                    <h3 className="notLoggedInText">
                        <b>Create an account</b> or <b>Log In</b> to start tracking expenses
                    </h3>
                }
                {user && 
                <main>
                    <div className="leftSection">
                        
                    </div>
                    <div className="rightSection">
                        <ExpenseForm user={user} /> 
                    </div>
                </main>
                }
        </div>
    )
}

export default Home