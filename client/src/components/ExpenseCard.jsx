function ExpenseCard(props) {
    const currencySymbols = {
        "GBP": "£",
        "USD": "$",
        "EUR": "€",
        "JPY": "¥"
    }
    const currency = currencySymbols[props.user.currency]

    return (
        <div className="expenseCard">
            <h3>{props.title}</h3>
            <p>{currency}{props.cost}</p>
            <p>{props.category}</p>
        </div>
    )
}

export default ExpenseCard