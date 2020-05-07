import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const Navigation = ({props, onRouteChange}) => {

    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="black bg-washed-green" light expand="md">
          <NavbarBrand href="/">PKBM HANUBA</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink onClick={()=>onRouteChange('alumni')}>Alumni</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>onRouteChange('tentor')} >Tentor</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>onRouteChange('fasilitas')}>Fasilitas</NavLink>
              </NavItem>              
            </Nav>
            <NavbarText onClick={()=>onRouteChange('info')}>Info</NavbarText>
          </Collapse>
        </Navbar>
      </div>


    );
}

export default Navigation;

