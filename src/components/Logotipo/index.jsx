import React from 'react'
import isotipo from '../../images/iso-mario-campbell.svg'

const Logotipo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10" >
      <img className="w-10 mb-2" src={ isotipo } alt="Mario Campbell isotipo" />
      <h1 className="font-logotipo uppercase text-center text-lg" >Mario <span className="">Campbell</span></h1>
    </div>
  )
}

export default Logotipo
