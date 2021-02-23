/** @jsx jsx */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/react';
import { Button } from '@material-ui/core';

const textStyle = css({
  fontSize: '20px',
  color: 'red',
});

const buttonStyles = css`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

console.log(textStyle);

ReactDOM.render(
  <div>
    <Button css={buttonStyles}>PUSH</Button>
    <p css={textStyle}>Hello world</p>
  </div>,
  document.getElementById('app')
);
