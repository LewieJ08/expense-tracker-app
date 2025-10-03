import { useState, useEffect } from "react";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseCard from "../components/ExpenseCard";

function Home() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    let content;

    useEffect(() => {
        async function fetchExpenses() {
            try {
                const response = await fetch("/api/expenses", {
                    method: "GET",
                    headers: {Authorization: `Bearer ${user.token}`}
                });

                if (!response.ok) {
                    throw new Error(`Response Status: ${response.status}`);
                }

                const resBody = await response.json();
                setExpenses(resBody.data);

            } catch(error) {
                console.log(error.message);
                throw error;

            } finally {
                setLoading(false);
            }
        } 

        if (user) {
            fetchExpenses();
        }

    }, [user?.token])


    if (!user) {
        content = (
            <h3 className="notLoggedInText">
                <b>Create an account</b> or <b>Log In</b> to start tracking expenses
            </h3>
        )
    } else if (loading) {
        content = (
            <h3>Loading...</h3>
        )
    } else {
        content = (
            <main>
                <div className="leftSection">
                    {expenses.map(expense => {
                        return (
                           <ExpenseCard
                                title={expense.title}
                                cost={expense.cost}
                                category={expense.category}
                            /> 
                        )
                    })}
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