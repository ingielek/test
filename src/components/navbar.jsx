import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import SearchBar from "./SearchBar";


export default class NavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Find My Pet!</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Post Lost Pet
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Look For Lost Pet
                        </NavItem>
                        <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Nearest Pet Shelter
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Notify Nearest Pet Shelter
                        </NavItem>
                        <NavItem>
                            <SearchBar/>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}