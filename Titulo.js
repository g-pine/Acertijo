import React from 'react'
import imagen from '../imagenes/descarga.jpeg'

export default function Titulo() {
  return (
    <div>
      <h1>El acertijo</h1>
      <img style={{width : '500px'}} src={imagen}></img>
    </div>
  )
}