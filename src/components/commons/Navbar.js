import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navbar = () => {
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/recipes" activeClassName="active">Recipes</Link>
        </nav>
    );
};

export default Navbar;