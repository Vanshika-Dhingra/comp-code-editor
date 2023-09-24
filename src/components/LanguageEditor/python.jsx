import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

function Python() {
  const [result, setResult] = useState(null);
  const [python, setPython] = useState('')
  console.log(result)

  return (<>
    <Container>
      <Editor
        language='python'
        heading='python'
        value={python}
        onChange={setPython}
        icon='Py'
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

export default Python
