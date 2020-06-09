import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import ProtectedRoute from './utils/ProtectedRoute'
import Counter from './pages/Counter'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import CounterJSONServer from './pages/CounterJSONServer'

// import TodoAddForm from './components/todo/TodoAddForm'
//import TodoItem from './components/TodoItem'
// import TodoList from './components/todo/TodoList'

function App() {
  async function getTodosFromServer() {
    // 開啟載入指示

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/todos', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setTodos(data)
  }
  useEffect(() => {
    getTodosFromServer()
  }, [])
  const [todos, setTodos] = useState([
    { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
    { id: 1591256594281, text: '買iphone', completed: false, edited: true },
    { id: 1591256594283, text: '學react', completed: false, edited: false },
  ])

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginErrors, setLoginErrors] = useState([])

  const [auth, setAuth] = useState(false)

  const loginProcess = (loginSuccessCallback) => {
    const errors = []

    if (name === '') errors.push('姓名沒填')
    if (username === '') errors.push('帳號沒填')
    if (password === '') errors.push('密碼沒填')

    if (errors.length > 0) {
      setLoginErrors(errors)
      return
    }

    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])
    setAuth(true)

    // 執行成功的callback(來自MemberLogin)
    loginSuccessCallback()
  }

  return (
    <Router>
      <>
        <MyNavbar
          auth={auth}
          name={name}
          setAuth={setAuth}
          setName={setName}
          setPassword={setPassword}
          setUsername={setUsername}
        />
        <MainContent>
          <Switch>
            <Route path="/product/:id?">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/productlist">
              <ProductList />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/about">
              <About title="關於我們" lead="首頁是一個網站的第一個看到的頁面" />
            </Route>
            <Route path="/CounterJSONServer">
              <CounterJSONServer />
            </Route>
            <ProtectedRoute path="/todoapp">
              <TodoApp todos={todos} setTodos={setTodos} isAuth={auth} />
            </ProtectedRoute>
            <Route path="/memberlogin">
              <MemberLogin
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                loginProcess={loginProcess}
                loginErrors={loginErrors}
                auth={auth}
              />
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
