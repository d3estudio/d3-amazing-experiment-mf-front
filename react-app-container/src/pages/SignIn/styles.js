import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap');

  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

`;

export const Header = styled.header`
  width: 100%;
  height: 10vh;

  background: ${props => props.theme.colors.primary};
  text-align: center;

  > a {
    > img {
      width: 25px;
      height: 25px;
      
      margin: 20px auto;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-family: 'Montserrat', sans-serif;

    font-size: 16px;
    font-weight: 200;
    color: #fff;

    letter-spacing: .05em;
    margin-bottom: 10px;
  }

  > span {
    font-size: 12px;
    font-weight: 200;
    color: #8b8c8c;

    margin-bottom: 35px;
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 400px;

    > input {
      width: 100%;
      height: 40px;
      
      font-size: 16px;
      color: ${props => props.theme.colors.white};
      
      padding: 0 5px ;
      margin-bottom: 20px;

      background: transparent;
      border-bottom: 1px solid rgba(255,255,255,0.2);

      &::placeholder {
        color: rgba(255,255,255,0.2);
        font-weight: 500;
      }
    }
  }

  > a {
    margin-top: 60px;
    font-size: 14px;
    color: ${props => props.theme.colors.white};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
  width: ${props => props.isLoading ? "40px" : "100%"};
  height: 40px;

  font-size: 13px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.isLoading ? "40px" : "3px"};

  transition: width .2s ease-in-out;

  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }

  ${props => props.isLoading &&   css`animation: ${rotate} 2s linear infinite;
  border-bottom: none;
  
  `}

`;