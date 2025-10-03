function ExpenseCard(props) {
    return (
        <div className="expenseCard">
            <h3>{props.title}</h3>
            <p>{props.cost}</p>
            <p>{props.category}</p>
        </div>
    )
}

export default ExpenseCard