import React from 'react'
import'./index.css'
import returnValue from '../../icons/return.svg'

export default function ReturnValue(props) {
  const { command } = props

  return (
    <>
      <div className='leftPadding'>
        <img src={returnValue} alt={''} className='icon' />
      </div>
      <div
        className={`
        content
        ${!command ? 'disabled' : ''}
        ${{}.toString.call(command) === '[object Number]' ? 'number' : ''}
      `}
      >
        {`${command}`}
      </div>
    </>
  )
}
