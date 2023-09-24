import React from 'react'
import './index.css'

export default function ErrorLogValue(props) {
  const { command } = props

  return (
    <>
      <div className='leftPadding'></div>
      <div className='content error'>
        {`${command?.name}: ${command?.message}`}
      </div>
    </>
  )
}
