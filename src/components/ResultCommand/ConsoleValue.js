import React from 'react'
import'./index.css'

export default function ConsoleValue(props) {
  const { command } = props

  return (
    <>
      <div className='leftPadding'></div>
      <div className='content'>{Object.values(command).join(' ')}</div>
    </>
  )
}
