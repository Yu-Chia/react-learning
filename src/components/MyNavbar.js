import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <Nav.Link as={NavLink} to="/todoapp">
              待辦事項
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              產品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/memberlogin">
              會員登入
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
