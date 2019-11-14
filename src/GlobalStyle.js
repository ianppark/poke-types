import { createGlobalStyle } from 'styled-components';
import { surface, onSurface } from './components/utilities';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${surface};
    color: ${onSurface};
    font-family: 'Ubuntu', sans-serif;
  }

  .surface {
    background: #121212;
  }

  .sticky-top {
    position: sticky;
    top: 0;
  }

`;

export default GlobalStyle;
