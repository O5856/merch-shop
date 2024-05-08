import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/cart" className=" cartbtn">Cart</Link>
       </nav>
    )
}

export default Navigation