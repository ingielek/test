import React, { Component } from 'react';
import '../App.css';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarValue: ''
        }
    }

    handleClick () {
        console.log("It works");
    }

    render () {
            return (
                <div>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder={this.state.searchBarValue} />
                            </FormGroup>
                            <Button type="submit" onClick={this.handleClick()}>Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </div>
            );
        }
}