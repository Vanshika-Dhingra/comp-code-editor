import React, { useState } from 'react';
import Editor from '../Editor';
import { Box, Card, CardContent, styled } from '@mui/material';

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultCard = styled(Card)`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Python() {
  const [result, setResult] = useState(null);
  const [python, setPython] = useState('');
  console.log(result);

  return (
    <>
      <Container>
        <Editor
          language='javacript'
          heading='javascript'
          value={python}
          onChange={setPython}
          icon='()'
          color='#FCD000'
          setResult={setResult}
        />
      </Container>
      {result && (
        <ResultCard>
          <CardContent>
            <h3>Result:</h3>
            <pre>{result}</pre>
          </CardContent>
        </ResultCard>
      )}
    </>
  );
}

export default Python;
