import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="navBar">
            <header>
                <h2>Stephen <span>Thiong'o</span></h2>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">what about stephen</Link></li>
                    <li><Link to="/contact">Consulting with stephen</Link></li>
                    <li><Link to="/preliminary">Let's together with Stephen</Link></li>
                </nav>
                <img src="" alt="" />
                <button>Let's Together</button>
            </header>
        </div>
    )
}
export default Navbar