import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blogger</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;

// inline style is given as object as variable in JSX code :-
// style={{                  
//     color: "white",
//     backgroundColor: '#f1356d',
//     borderRadius: '8px'
// }}

