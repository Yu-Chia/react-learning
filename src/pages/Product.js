import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Product(props) {
  console.log(props)

  const searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      <MyBanner title="產品" lead="product" />
      <MyBreadcrumb />
      <h2>目前產品類型(從網址取得)：{searchParams.get('cat')}</h2>
      <h3>目前產品編號(從網址取得)：{searchParams.get('id')}</h3>
    </>
  )
}

export default withRouter(Product)
