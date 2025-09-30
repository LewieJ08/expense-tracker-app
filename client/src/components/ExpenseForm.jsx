import { useState } from "react"

function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");
    const [category, setCategory] = useState("groceries");
    const [error, setError] = useState("");
    
    async function createExpense(e) {
        e.preventDefault();

        try {
            const response = await fetch("/api/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.user.token}`
                },
                body: JSON.stringify({  
                    title: title,
                    cost: cost,
                    category: category
                })
            });

            if (!response.ok) {
                if (response.status === 400) {
                    const resBody = await response.json();
                    setError(resBody.error);
                    return;
                } else {
                    throw new Error(`Response Status: ${response.status}`);
                }
            }

            location.reload();
        } catch(error) {
            console.log(error.message);
            throw error;
        }
    }

    return ( 
        <div className="expenseForm">
            <h2>Create Expense</h2>
            <form onSubmit={createExpense}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <br />
                <input 
                    type="number"
                    placeholder="Cost"
                    min="0.01"
                    step="0.01"
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                    required
                />
                <p>Select a Category</p>
                <select
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="groceries">Groceries</option>
                    <option value="leisure">Leisure</option>
                    <option value="electronics">Electronics</option>
                    <option value="utilities">Utilities</option>
                    <option value="clothing">Clothing</option>
                    <option value="health">Health</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <button className="formButton" type="submit">Create Expense</button>
            </form>

            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    )
}

export default ExpenseForm