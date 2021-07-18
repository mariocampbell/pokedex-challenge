import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Hero } from '../'
import {sooft} from '../../images'

const Menu = () => {
  return (
    <header className='bg-primary-900 text-white'>
      <section className='container mx-auto py-4 flex justify-between items-center' >
        <Link to='/' >
          <img className='h-12' src={sooft} alt="Sooft technology" />
        </Link>
        <a href="http://www.mariocampbell.com.ar" target='_blank' rel='noopener noreferrer' >
          <section className='flex items-center' >
            <div className='pr-4' >
              <h1 className='text-lg font-logotipo' >Mario <span className='text-primary-400' >Campbell</span></h1>
              <p className='font-light text-primary-200' >Desarrollador Frontend</p>
            </div>
            <Avatar />
          </section>
        </a>
      </section>
      <Hero />
    </header>
  )
}

export default Menu
