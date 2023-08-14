import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <section className="error">
            <h1 className="error__text error__text--big">ERROR: 404</h1>
            <p className="error__text error__text--small">Page not found</p>
            <Link to="/" className="error__button">return to home</Link>
        </section>
    )
}