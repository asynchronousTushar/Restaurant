import React from 'react';
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    state = {
            isNavOpen: false
        }


    togglerHandeler = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render() {
        return (
            <div className="Navigation" >
                <Navbar dark color="dark" expand="sm">
                    <div className="container" >
                        <NavbarBrand href="/">Grand Restaurant</NavbarBrand>
                        <NavbarToggler onClick={ this.togglerHandeler}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar  >
                            <Nav className="ml-auto float-left" navbar >
                                <NavItem>
                                    <NavLink to="/home" exact className="nav-link" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/blog" exact className="nav-link" >Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/recipe" exact className="nav-link" >Recipe</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/gallery" exact className="nav-link" >Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" exact className="nav-link" >Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about" exact className="nav-link" >About</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

            
            </div>
        );
    }
}


export default Navigation;