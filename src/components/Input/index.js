import React from 'react'
import './index.css'
import pointerIcon from '../../icons/pointer.svg'

export default function Input(props) {
  const { value, onChange, onKeyDown } = props
  const length = value.split('\n').length
  const multiline = length > 1
  const lengthRows = length > 20 ? 20 : length

  return (
    <div className='container'>
      <div className='container2'>
        <div className='leftPadding'>
          <img src={pointerIcon} alt={''} className='icon' />
        </div>
        <textarea
          className='input'
          multiple={multiline}
          rows={lengthRows}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  )
}
