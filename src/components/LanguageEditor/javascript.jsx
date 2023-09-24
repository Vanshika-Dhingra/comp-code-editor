import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

const Javascript = () => {
  const [js, setJs] = useState('')
  const [result, setResult] = useState(null);
  return (
    <>
      <Container>
        <Editor
          language='javascript'
          heading='JS'
          value={js}
          onChange={setJs}
          icon='( )'
          color='#FCD000'
          setResult={setResult}
        />
      </Container>
      <div>
        <p>Result: {result}</p> {/* Display the result */}
        {/* Render your other component here that needs access to the result */}
      </div>
    </>
  )
}

export default Javascript
