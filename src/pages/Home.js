import React, { useState, useEffect } from 'react'
import MyBanner from '../components/MyBanner'

function Home(props) {
  return (
    <>
      <MyBanner title={props.title} lead={props.lead} />
    </>
  )
}

export default Home
