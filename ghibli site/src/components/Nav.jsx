import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <Link key={1} to='/react' data-cursor-text=" " data-cursor-stick>
                React
            </Link>
            <Link key={2} to='/express' data-cursor-text=" " data-cursor-stick>
                Express
            </Link>
        </nav>
    )
}