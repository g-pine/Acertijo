import React, { useState } from 'react'

export default function Juego(props) {
    let maquina = Math.floor(Math.random() * props.limite + 1);
    let [numero, setNumero] = useState(0);
    let [numeroMaquina, setNumeroMaquina] = useState(maquina);
    const numeroUsuario = (event) => {
        setNumero(event.target.value);
    }
    const comprobarNumeroMaquina = () => {
        if(numero == numeroMaquina) {
            alert("Adivinaste")
        } else {
            alert(`Fallaste estúpido la respuesta correcta es ${numeroMaquina}`)
        }
        setNumeroMaquina(maquina);
    }
  return (
    <div>
      <input 
        onChange={numeroUsuario} placeholder='Ingresa un número'
        type='number'
        min={1}
        max={10}
      />
      <br/>
      <button onClick={comprobarNumeroMaquina}>Calcular</button>
    </div>
  )
}
