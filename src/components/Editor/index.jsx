import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/selection/active-line';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Box, styled, Button } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import '../../App.css';

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const Editor = ({ heading, language, value, onChange, icon, color,setResult }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  const handleExecuteCode = () => {
    // Execute code here
    try {
      // const result = eval(value); // Execute the code in the editor
      // console.log('Code executed successfully:', result);
      // setResult(result);
      // Create an array to capture the log output
  const logOutput = [];

  // Override console.log to capture its output
  const originalLog = console.log;
  console.log = function (...args) {
  originalLog.apply(console, args); // Call the original console.log
  logOutput.push(...args); // Capture the logged values
  };

  eval(value); // Execute the code

// Restore console.log to its original state
  console.log = originalLog;

// The logOutput array now contains the captured log values
console.log(logOutput);
  const result = logOutput.join(', ');
  setResult(result);
    } catch (error) {
      console.error('Error executing code:', error);
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component='span'
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: 'center',
              color: '#000',
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreen
          fontSize='small'
          style={{ alignSelf: 'center' }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
        <Button onClick={handleExecuteCode}>Execute</Button>
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='controlled-editor'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'monokai',
          matchBrackets: true,
          autoCloseBrackets: true,
          styleActiveLine: true,
        }}
      />
    </Container>
  );
};

export default Editor;
