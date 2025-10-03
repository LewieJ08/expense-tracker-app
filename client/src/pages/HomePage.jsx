import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";

function Home() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    let content 

    async function fetchExpenses() {
        try {
            const response = await fetch("/api/expenses", {
                method: GET,
                headers: {Authorization: `Bearer ${user.token}`}
            });

            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const resBody = await response.json;
            return resBody.data;

        } catch(error) {
            console.log(error.message);
            throw error;
        }
    }

    const expenses = fetchExpenses(); 

    if (!user) {
        content = (
            <h3 className="notLoggedInText">
                <b>Create an account</b> or <b>Log In</b> to start tracking expenses
            </h3>
        )
    } else {
        content = (
            <main>
                <div className="leftSection">
    
                </div>
                <div className="rightSection">
                    <ExpenseForm user={user} /> 
                </div>
            </main>
        )
    }
    
    return (
        <div>
            <Header user={user} />
            {content}
        </div>
    )
}

export default Home