import React from 'react'

import Carusel from './Carusel'


import heart from '../../../assets/svgicon/heart.svg'

const Mahbobsectionroot = () => {
  return (
    <section className="my-3">
        <h2 className="flex items-center gap-2 p-2 text-xl font-bold"> <img src={heart} className="w-6 h-6" alt="heart" /> محبوب ترین دوره ها</h2>
        <Carusel />
    </section>
  )
}

export default Mahbobsectionroot