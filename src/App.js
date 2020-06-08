import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import TodoApp from './pages/TodoApp'
import Product from './pages/Product'
import MemberLogin from './pages/MemberLogin'
import NotFoundPage from './pages/NotFoundPage'

// import TodoAddForm from './components/todo/TodoAddForm'
//import TodoItem from './components/TodoItem'
// import TodoList from './components/todo/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
    { id: 1591256594281, text: '買iphone', completed: false, edited: true },
    { id: 1591256594283, text: '學react', completed: false, edited: false },
  ])

  const [name, setName] = useState('')
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/product/:id?">
              <Product />
            </Route>
            <Route path="/about">
              <About title="關於我們" lead="首頁是一個網站的第一個看到的頁面" />
            </Route>
            <Route path="/todoapp">
              <TodoApp title="待辦事項" todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/memberlogin">
              <MemberLogin name={name} setName={setName} />
            </Route>
            <Route exact path="/">
              <Home title="首頁" lead="首頁是一個網站的第一個看到的頁面" />
            </Route>
            <Route exact path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
