import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className='navbar'>
            <h2>Google Keep</h2>
            <button onClick={logout}>Logout</button>
        </nav>
    );
};

export default Navbar;