import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'

function MyNavbar(props) {
  const { name, setName, setUsername, setPassword, auth, setAuth } = props

  const loginButton = (
    <Button
      variant="outline-light"
      onClick={() => {
        props.history.push('/memberlogin')
      }}
    >
      登入
    </Button>
  )
  const logoutButton = (
    <>
      <span style={{ color: '#ffffff' }}>{name}, 你好</span>
      &nbsp;&nbsp;&nbsp;
      <Button
        variant="outline-light"
        onClick={() => {
          setAuth(false)
          setName('')
          setPassword('')
          setUsername('')
          props.history.push('/memberlogin')
        }}
      >
        登出
      </Button>
    </>
  )

  const displayButton = auth ? logoutButton : loginButton
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
            <Nav.Link as={NavLink} to="/product">
              產品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productlist">
              產品列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              購物車
            </Nav.Link>
            {auth ? (
              <Nav.Link as={NavLink} to="/todoapp">
                待辦事項
              </Nav.Link>
            ) : (
              ''
            )}
            {auth ? (
              ''
            ) : (
              <Nav.Link as={NavLink} to="/memberlogin">
                會員登入
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/counter">
              Counter
            </Nav.Link>
          </Nav>
          <Form inline>{displayButton}</Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
