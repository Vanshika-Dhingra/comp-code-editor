import React from 'react'
import './index.css'
import commandIcon from '../../icons/command.svg'

export default function CommandValue(props) {
  const { command } = props

  return (
    <>
      <div className='leftPadding'>
        <img src={commandIcon} alt={''} className='icon' />
      </div>
      <div className='content'>{command}</div>
    </>
  )
}
