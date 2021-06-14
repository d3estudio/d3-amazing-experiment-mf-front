import styled from 'styled-components';

export const Container = styled.nav`
  height: 60px;
  width: 100%;

  padding: 0 25px 0 30px;

  background-color: ${props => props.theme.colors.primary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 21px;
  height: 21px;
`;

export const Nav = styled.nav`
  height: 100%;

  > ul {
    height: 100%;

    display: flex;
    align-items: center;
    list-style: none;
  }

  > ul li {
    height: 100%;
  }

  > ul li a {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > ul li a:first-child span {
    padding: 0 25px ;

  }

  > ul li a span, ul li button span {
    padding: 0 25px 0 0;
  }

  > ul li:nth-child(7) a {
    padding: 0 25px;
  }

  > ul li button:last-child {
    height: 100%;
    padding: 0 0 0 25px;
  }

  > ul li a, ul li button {
    font-size: 11px;
    font-weight: 400;
    
    text-transform: uppercase;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: .1;
    
    color: ${props => props.theme.colors.gray};
    background-color: transparent;

    position: relative;

    transition: color .3s ease-in-out;
    
    &:hover {
    color: ${props => props.theme.colors.white};
    }
    }

    .activedMenu {
      color: ${props => props.theme.colors.white};
    }

    .activedMenu::after {
      content: '';
      position: absolute;
      height: .15px;
      width: 100%;
      background-color: ${props => props.theme.colors.white};
      left: 0;
      bottom: -0.5px;
    }

    ul li:not(:first-child, :nth-child(7), :nth-child(8)) button{
      cursor: not-allowed;
    }

`;
