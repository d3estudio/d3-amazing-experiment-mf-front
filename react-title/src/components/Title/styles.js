import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap');

  margin-left: 15px;
  margin-bottom: 7px;
  
  > h3 {
    font-size: 11px;
    line-height: 12px;
    font-weight: 400;
    
    text-transform: uppercase;
    
    color: ${props => props.theme.colors.white};
    opacity: .5;
  }
`