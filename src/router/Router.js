import React from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'
import { Menu, Footer } from '../components'
import { Home, Pokemon } from '../views'

const Router = () => {
  return (
    <AppRouter >
      <section className="flex flex-col h-screen" >
        <Menu />
        <section className='flex-1'>
          <Switch >
            <Route path='/pokemon/:id' exact={true} component={Pokemon} />
            <Route path='/' exact={true} component={Home} />
          </Switch>
        </section>
        <Footer />
      </section>
    </AppRouter>
  )
}

export default Router
