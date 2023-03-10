import {Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}>Yeni Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
//sfc boilerplate code.