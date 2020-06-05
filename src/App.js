import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import TodoApp from './pages/TodoApp'

// import TodoAddForm from './components/todo/TodoAddForm'
//import TodoItem from './components/TodoItem'
// import TodoList from './components/todo/TodoList'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent title="1213">
          <Link to="/">首頁</Link>
          <Link to="/about">關於</Link>
          <Link to="/todoapp">待辨</Link>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/todoapp">
              <TodoApp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
