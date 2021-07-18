import React, {useEffect, useState} from 'react'
import { Article, Card } from '../../components'

const Home = () => {

  const [getListPokemons, setGetListPokemons] = useState([])
  const [numPage, setNumPage] = useState(0)
  const [maxLimit, setMaxLimit] = useState(5)

  const handleChangePage = event => {
    if(event.target.id === 'next') {
      setNumPage(numPage + maxLimit)
    } else if(event.target.id === 'previous' && numPage > 0) {
      setNumPage(numPage - maxLimit)
    }
  }

  const handleChangeSelect = (event) => {
    setMaxLimit(event.target.value)
  }

  const apiPokemon = async (page, limit) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`),
        resArray = await res.json(),
        resultados = resArray.results

      const pokemonsPromises = resultados.map(item => {
        return new Promise((resolve, reject) => {
          fetch(item.url)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
        })
      })
      const pokemonsList = await Promise.all(pokemonsPromises)
      setGetListPokemons(pokemonsList)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apiPokemon(numPage, maxLimit)
  }, [numPage, maxLimit])

  return (
    <section className="container mx-auto px-4 md:px-0 py-32" >
      <div className='flex items-center justify-between font-light'>
        <h1 className='font-headers text-2xl py-4' >Pokemons</h1>
        <div className='flex items-center' >
          <label className='font-light uppercase pr-2 text-xs' htmlFor="limit">Cant.</label>
          <select className='px-6 bg-transparent' onChange={handleChangeSelect} name='limit' id='limit' >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4' >
      {
        getListPokemons.map((item, index) => <Card key={index} pokemon={item} />)
      }
      </div>
      <div className='mt-6 flex justify-between ' >
        <button onClick={handleChangePage} id='previous' className='uppercase px-6 py-2 font-light text-primary-400 text-sm' ><i className="fas fa-chevron-left pr-2"></i>anterior</button>
        <button onClick={handleChangePage} id='next' className='uppercase px-6 py-2 font-light text-primary-400 text-sm' >siguiente<i className="fas fa-chevron-right pl-2"></i></button>
      </div>
      <Article />
    </section>
  )
}

export default Home
