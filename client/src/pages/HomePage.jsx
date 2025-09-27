import Header from "../components/Header"

function Home() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    
    return (
        <Header user={user}/>
    )
}

export default Home