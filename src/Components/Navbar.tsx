import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="navBar">
            <header>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/preliminary">Preliminary</Link></li>
                </nav>
            </header>
        </div>
    )
}
export default Navbar