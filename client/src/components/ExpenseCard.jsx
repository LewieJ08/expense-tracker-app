import { useNavigate } from "react-router-dom";

const currencySymbols = {
    "GBP": "£",
    "USD": "$",
    "EUR": "€",
    "JPY": "¥"
}

function ExpenseCard(props) {
    const navigate = useNavigate();
    const currency = currencySymbols[props.user.currency];

    async function deleteExpense() {
        try {
            const response = await fetch(`/api/expenses/${props.id}`, {
                method: "DELETE",
                headers: {Authorization: `Bearer ${props.user.token}`}
            });

            if (!response.ok) {
                if (response.status === 404) {
                    navigate("/404");
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
        <div className="expenseCard">
            <h3>{props.title}</h3>
            <p>{currency}{props.cost}</p>
            <p>{props.category}</p>
            <button onClick={deleteExpense}>Delete</button>
        </div>
    )
}

export default ExpenseCard