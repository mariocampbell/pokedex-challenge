import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({pokemon}) => {
  return (
    <div className='bg-white shadow rounded-xl overflow-hidden' >
      <div className='flex flex-col items-center' >
        <div className='bg-primary-500 w-full h-32 border-b-4 border-primary-700 relative flex justify-center' >
        </div>
        <div className='-mt-16 z-30 h-32 w-32 rounded-full overflow-hidden bg-white border-4 border-primary-700' >
          <img className='scale-50' src={pokemon.sprites.other.dream_world.front_default} alt="pokemon avatar" />
        </div>
      </div>
      <div className='py-4' >
        <h2 className='uppercase text-center' >{pokemon.name}</h2>
        <p className='text-center font-light text-gray-500' >{pokemon.species.name}</p>
        <div className='pt-6 flex justify-around' >
          <p className='flex flex-row justify-center' >
            <i className="fas fa-weight-hanging text-gray-300"></i>
            <span className='text-xs text-center font-bold text-primary-600 pl-2'>{pokemon.weight}</span>
          </p>
          <p className='flex flex-row justify-center' >
            <i className="fas fa-arrows-alt-v text-gray-300"></i>
            <span className='text-xs text-center font-bold text-primary-600 pl-2'>{pokemon.height}</span>
          </p>
        </div>
      </div>
      <hr className='border-gray-200 mt-2' />
      <div className='py-4 text-center' >
        <Link to={`/pokemon/${pokemon.id}`} className='font-light' >ver detalles</Link>
      </div>
    </div>
  )
}

export default Card
