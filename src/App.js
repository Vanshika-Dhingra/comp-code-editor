import React, { useState, useCallback, useEffect } from 'react'
import Input from './components/Input'
import ListResultCommand from './components/ListResultCommand'
import './App.css'
import { TypeCommand } from './components/ResultCommand/chooseTypeValue'

let id = 1
const getId = () => ++id

const listCommandInit = [
]

const listConsoleFunction = ['log', 'error', 'info']

let init = false

function App() {
  const [input, setInput] = useState('')
  const [listCommand, setListCommand] = useState([...listCommandInit])

  const onValueChange = useCallback((event) => {
    setInput(event.target.value)
  }, [])

  useEffect(() => {
    const defaultConsole = {}
    if (init) {
      return
    }
    listConsoleFunction.forEach((item) => {
      defaultConsole[item] = window.console[item].bind(window.console)
      window.console[item] = function () {
        defaultConsole[item].apply(window.console, arguments)
        const consoleItem = {
          id: getId(),
          value: arguments,
          type: TypeCommand.CONSOLE,
        }
        setTimeout(() => {
          setListCommand((oldList) => [...oldList, { ...consoleItem }])
        })
      }
    })
    init = true
  }, [])

  const onKeyDown = useCallback((event) => {
    const command = event.target.value
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        return
      }
      event.preventDefault()
      const commandItem = {
        id: getId(),
        value: command,
        type: TypeCommand.COMMAND,
      }
      const returnItem = {
        id: getId(),
        value: undefined,
        type: TypeCommand.RETURN,
      }
      try {
        returnItem.value = eval(command)
      } catch (error) {
        returnItem.value = error
        returnItem.type = TypeCommand.ERROR_LOG
      }

      setListCommand((oldList) => [...oldList, { ...commandItem }])
      setTimeout(() => {
        setListCommand((oldList) => [...oldList, { ...returnItem }])
      })
      setInput('')
    }
  }, [])

  return (
    <div className='container'>
      <ListResultCommand listCommand={listCommand} />
      <Input value={input} onChange={onValueChange} onKeyDown={onKeyDown} />
    </div>
  )
}

export default App
