import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar, 
  NavbarBrand, 
  NavbarToggler,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';

const Sitebar = (props) => {
  // console.log(props)

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      let newIsOpen = !isOpen;
      setIsOpen(newIsOpen)
    }
    
    return (
      <div>
        <Navbar color="info" dark expand='md'>
          <NavbarBrand>Welcome to your Budget.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar pills>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className='text-white' >
                  <h5>Settings</h5>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem disabled onClick={props.clickAccountSettings}>
                    Account Settings
                  </DropdownItem>
                  <DropdownItem disabled>
                    Extra Stuff
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className='text-danger' onClick={props.clickLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

}

export default Sitebar