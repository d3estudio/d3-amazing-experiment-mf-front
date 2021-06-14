import { createGlobalStyle } from 'styled-components';
import zagBackground from '../assets/zag_background.svg';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        background-color: ${props => props.theme.colors.primary};
        background-image: url(${zagBackground});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }

`;