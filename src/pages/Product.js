import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Product(props) {
  console.log(props)
  return (
    <>
      <MyBanner title="產品" lead="product" />
      <MyBreadcrumb />
      <h2>目前產品編號(從網址取得)：{props.match.params.id}</h2>
    </>
  )
}

export default withRouter(Product)
