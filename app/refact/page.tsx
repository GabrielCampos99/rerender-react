"use client"
import React, { useState } from "react"

const RefactPage = () => {
  return ( 
    <Contador 
      component={<ComponenteSuperPesado />} 
    />
  )
}

export default RefactPage

type ContadorProps = {
  component: React.ReactNode
}

const Contador = (props: ContadorProps) => {
  const { component } = props
  const [counter, setCounter] = useState<number>(0)

  const handleOnClick = () => {
    setCounter((oldState) => oldState + 1)
  }

  return (
    <main className="p-4">
      <h1>Renderização {counter}</h1>

      <button onClick={handleOnClick}>SOMAR UM</button>

      {component}
    </main>
  )
}

const ComponenteSuperPesado = () => {
  let arrayDeObjetos = Array.from({ length: 70000 }, (_, index) => ({ id: index }))

  return (
    <div className="items-container">
      {arrayDeObjetos.map((item) => (
        <div className="item" key={item.id}>
          {item.id}
        </div>
      ))}
    </div>
  )
}
