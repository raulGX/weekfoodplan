import React from 'react';
import {Link, IndexLink} from 'react-router';

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this); 
        this.setNavbarOnNormal = this.setNavbarOnNormal.bind(this);

        this.state = {isNavbarVisible: 'normal'};
    }

    toggleNavbar(){
        if(this.state.isNavbarVisible !== 'normal')
            this.setState({isNavbarVisible: !this.state.isNavbarVisible});
        else
            this.setState({isNavbarVisible: true});
    }

    setNavbarOnNormal(){
        this.setState({isNavbarVisible: 'normal'});
    }

    render() {
        return (
            <nav className={"my-navbar "+ "translate-" + this.state.isNavbarVisible}>
                <div className="my-navbar-brand">
                    <Link to="/">WeekFoodPlan</Link>
                </div>
                <div onClick={this.setNavbarOnNormal} className={"my-navbar--rightside display-" + this.state.isNavbarVisible}>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    <Link to="/recipes" activeClassName="active">Recipes</Link>
                    <Link to="/ingredients" activeClassName="active">Ingredients</Link>
                    <Link to="/meals" activeClassName="active">Meals</Link>
                    <Link to="/about" activeClassName="active">About</Link>
                </div>
                <button type="button" onClick={this.toggleNavbar} className="my-navbar--menu">asd</button>
            </nav>
        );
    }
};

export default Navbar;