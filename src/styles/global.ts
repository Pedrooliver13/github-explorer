import { createGlobalStyle } from 'styled-components';

import * as C from './constants';
import Reset from './reset';
import GitBack from '../assets/github-background.svg';

const GlobalStyled = createGlobalStyle`
  ${Reset};

  body {
    background: ${C.primaryColor} url(${GitBack})no-repeat 70% top;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyled;
