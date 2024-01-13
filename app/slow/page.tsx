"use client"
import React, { useState } from "react"

const SlowPage = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleOnClick = () => {
    setCounter((oldState) => oldState + 1)
  }

  let arrayDeObjetos = Array.from({ length: 70000 }, (_, index) => ({ id: index }))

  return (
    <main className="p-4">
      <h1>Renderização {counter}</h1>

      <button onClick={handleOnClick}>SOMAR UM</button>

      <div className="items-container">
        {arrayDeObjetos.map((item) => (
          <div className="item" key={item.id}>
            {item.id}
          </div>
        ))}
      </div>
    </main>
  )
}

export default SlowPage
