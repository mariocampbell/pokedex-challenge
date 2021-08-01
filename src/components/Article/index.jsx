import React from 'react'

const Article = () => {
  return (
    <article className='font-light flex flex-col items-center my-32 text-center'>
      <h1 className='font-headers text-2xl py-4' >Pokedex Challenge</h1>
      <p className='px-4 md:px-0 md:w-8/12 py-2' >Aplicación sencilla, consumiendo la Pokeapi.</p>
      <p className='px-4 md:px-0 md:w-8/12 py-2' >Página inicial con un paginado dinámico de <span className='italic' >5-10-15-20</span> cards de pokemons según selector.</p>
      <p className='px-4 md:px-0 md:w-8/12 py-2' >Vista de detalles de cada uno de los pokemons, mostrando sus habilidades, descripción e imágenes en 2 idiomas <span className="italic">(español/inglés)</span> de forma dinámica.</p>
    
    </article>
  )
}

export default Article
