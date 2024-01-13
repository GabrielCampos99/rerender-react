"use client"
import React, { useState } from "react"

export default function Home() {
  return <Counter component={<ComponenteSuperPesado />}></Counter>
}

type CounterProps = {
  component: React.ReactNode
}
const Counter = (props: CounterProps) => {
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
  return arrayDeObjetos.map((item) => <div key={item.id}>{item.id}</div>)
}
