import React from 'react'

//code- splitting
//code- reusability
//code - maintenance

const Counter = () => {
  return (
    <div>
      <TopNavigation />

      <div> Sidebar</div>
      <div>conetnt</div>

      {/* <Product name={'tv'} price={0} img={''} />
      <Product name={'camera'} price={220000} img={''} />
      <Product name={'tv'} price={23000} /> */}

      <Footer />
    </div>
  )
}

const TopNavigation = () => {
  return (
    <div>
      <div>Blue Navigation</div>
      <div>White Navigation ssss</div>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div>Questions and Answers</div>
      <div>Footer links</div>
    </div>
  )
}

const secondPage = () => {
  return (
    <>
      <TopNavigation />
      <div>Conetent of the page</div>
      <Footer />
    </>
  )
}

export default Counter
