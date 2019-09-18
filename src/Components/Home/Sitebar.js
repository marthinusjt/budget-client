import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Nav,
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  NavItem, 
  NavLink
} from 'reactstrap';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      let newIsOpen = !isOpen;
      setIsOpen(newIsOpen)
    }
    
    return (
      <div>
        <Navbar color="success" light>
          <NavbarBrand href="/" className="mr-auto">Budget Stuff</NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Button onClick={props.clickAccountSettings}>Account Settings</Button>
              </NavItem>
              <br />
              <NavItem>
                <Button onClick={props.clickLogout}>Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

}

export default Sitebar