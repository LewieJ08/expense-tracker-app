import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <div className="pageNotfound">
            <h1>404 Not found</h1>
            <h4>Oops! looks like this page does not exist</h4>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default PageNotFound