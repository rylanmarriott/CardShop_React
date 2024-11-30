import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>Welcome to My React App!</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/details">Details</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/confirmation">Confirmation</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
