import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navbar = () => {
    return(
        <nav className="my-navbar">
        <div className="my-navbar-brand">
            <Link to="/">WeekFoodPlan</Link>
        </div>
            <div className="my-navbar--rightside">
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                <Link to="/recipes" activeClassName="active">Recipes</Link>
                <Link to="/ingredients" activeClassName="active">Ingredients</Link>
                <Link to="/meals" activeClassName="active">Meals</Link>
                <Link to="/about" activeClassName="active">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;