import React from 'react';
import chooseTypeValue from './chooseTypeValue';
import './index.css';

export default function ResultCommand(props) {
  const { data } = props;
  const { type, value } = data;
  const CommandComponent = chooseTypeValue(type);

  return (
    <div className='resultCommandContainer'>
      <CommandComponent command={value} />
    </div>
  )
}
