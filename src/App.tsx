import React from 'react'
import ExpenseTForm from './feature/ExpenseTForm'
import { useRoutes } from 'react-router-dom'
import Navbar from './feature/Navbar/Navbar'
import DigitalWatch from './feature/digital-watch/DigitalWatch'

const App = () => {

  let routes = useRoutes([
    {
      path : '',
      element : <ExpenseTForm />
    },
    {
      path : '/digital-watch',
      element : <DigitalWatch />
    }
  ])
  return (
    <>
    <Navbar />
    {routes}
    </>
  )
}

export default App