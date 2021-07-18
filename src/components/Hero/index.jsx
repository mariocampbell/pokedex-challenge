import React from 'react'
import { pokemon } from '../../images'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center py-32 bg-primary-500' >
    <img className='w-10/12 md:w-4/12 lg:w-2/12' src={pokemon} alt="Logo Pokemon" />
    </section>
  )
}

export default Hero
