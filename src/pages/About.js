import React from 'react'
import { withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function About(props) {
  return (
    <>
      <MyBanner title={props.title} lead={props.lead} />
      <MyBreadcrumb />
    </>
  )
}

export default withRouter(About)
