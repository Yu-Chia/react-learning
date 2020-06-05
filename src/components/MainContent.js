import React from 'react'
import MyBanner from '../components/MyBanner'

function MainContent(props) {
  //console.log(props)

  return (
    <>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          {/* 主要內容寫在這 */}
          {props.children}
        </div>
      </main>
    </>
  )
}

export default MainContent
