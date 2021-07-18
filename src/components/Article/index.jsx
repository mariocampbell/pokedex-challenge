import React from 'react'

const Article = () => {
  return (
    <article className='font-light flex flex-col items-center my-32 text-center'>
      <h1 className='font-headers text-2xl py-4' >Pokedex Challenge</h1>
      <p className='px-4 md:px-0 md:w-8/12 py-2' >Aplicación desarrollada para un challenge solicitado por <a className='font-bold text-gray-600 hover:text-primary-500 cursor-pointer' href='https://www.sooft.com.ar/' target='_blank' rel='noopener noreferrer' >Sooft Technology</a>. Web creada con React, usando Promesas para recuperar los datos de la Api; TailwindCss, para lograr un sitio responsive y dar estilos a los componentes.</p>
      <p className='px-4 md:px-0 md:w-8/12 py-2' >Utilizar la API/REST de <a className='font-bold text-gray-600 hover:text-primary-500 cursor-pointer' href='https://pokeapi.co' target='_blank' rel='noopener noreferrer' >POKEAPI</a> con paginado de a 5 pokemons. Ver detalles de cada uno de estos, mostrando sus habilidades, descripciones e imágenes en al menos 2 idiomas.</p>
      <p className='px-4 md:px-0 md:w-8/12 py-2' >Reto logrado con paginado dinámico de <span className='italic' >5-10-15-20 </span> cards de pokemons, según selección. Sección de detalles con las caracteristicas en <span className='italic' >español/inglés</span> de forma dinámica.</p>
    
    </article>
  )
}

export default Article
