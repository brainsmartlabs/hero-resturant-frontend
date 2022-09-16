import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className='container'>
            <Link to={"/"}>
                <button>Login </button>
            </Link>
            <Link to={"/restaurant"} >
                <button>Restaurant </button>
            </Link>
        </div>
    );
}

