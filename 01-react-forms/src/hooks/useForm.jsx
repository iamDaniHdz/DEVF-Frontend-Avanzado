// Reglas para crear un Hook
// Custom hook es una función que utiliza otros hooks de React
// 1. Siempre debemos usar la palabra 'use' al nombrar el archivo (useForm)
// 2. Siempre deben de ser funciones (a partir de React v16 usamos hooks)
// 3. Siempre debemos de usar al menos un Hook de React (useState, useEffect, useRef, etc...)
// 4. Deben de ser reutilizables, no son para casos específicos
import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  // Función que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // Equivale a:
    // const name = event.target.name
    // const value = event.target.value
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // Evitar que se recargue la página
    callback(input) // Esta es la función que recibe por parámetro
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
