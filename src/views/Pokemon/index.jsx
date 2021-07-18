import React, {Fragment, useEffect, useState} from 'react'
import {useParams} from 'react-router'

import {Article} from '../../components'

const Pokemon = () => {
  const {id} = useParams()
  const [pokemon, setPokemon] = useState()
  const [caracteristicas, setCaracteristicas] = useState()
  const [indexIdioma, setIndexIdioma] = useState(1)

  const getPokemon = async (id, language='es') => {
    

    const [pokemonPromise, caracteristicaPromise] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
        fetch(`https://pokeapi.co/api/v2/characteristic/${id}`),
    ]),
      objPokemon = await pokemonPromise.json(),
      objCaracteristicas = await caracteristicaPromise.json()

    setPokemon(objPokemon)
    setCaracteristicas(objCaracteristicas)
  }

  const handleChangeLanguage = event => {
    switch(event.target.value) {
      case 'fr':
        setIndexIdioma(0)
        break
      case 'en':
        setIndexIdioma(2)
        break
      default: 
        setIndexIdioma(1)
    }
  }

  useEffect(() => {
    getPokemon(id)
  }, [indexIdioma])

  return (
    <Fragment>
    {
      pokemon && caracteristicas && <section className="container mx-auto md:w-8/12 px-4 md:px-0 py-32" >
        <div className='flex justify-end items-center mb-4 w-8/12 mx-auto' >
          <label className='font-light uppercase pr-2 text-xs' htmlFor="language">Idioma</label>
          <select className='px-6 bg-transparent' onChange={handleChangeLanguage} name='language' id='language' >
            <option value='es' >Español</option>
            <option value='en' >Inglés</option>
          </select>
        </div>
      <div className='flex flex-col md:flex-row items-center container mx-auto bg-white shadow md:px-6 py-12 rounded-xl' >
            <div className='w-5/12 mr-4' >
              <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            </div>
            <article className='w-7/12 flex flex-col items-center' >
              <h1 className='font-headers uppercase text-2xl' >{pokemon.name}</h1>
              <p className='font-light uppercase text-gray-500' >{pokemon.species.name}</p>
              <div className='pt-6 flex' >
                <p className='flex flex-row justify-center pr-6' >
                  <i className="fas fa-weight-hanging text-gray-300"></i>
                  <span className='text-xs text-center font-bold text-primary-600 pl-2'>{pokemon.weight}</span>
                </p>
                <p className='flex flex-row justify-center' >
                  <i className="fas fa-arrows-alt-v text-gray-300"></i>
                  <span className='text-xs text-center font-bold text-primary-600 pl-2'>{pokemon.height}</span>
                </p>
              </div>
              <p className='font-light text-center text-xl pt-4' >{caracteristicas.descriptions[indexIdioma].description}</p>
            </article>
          </div>
         <Article />
        </section>
      }
    </Fragment>
  )
}

export default Pokemon
