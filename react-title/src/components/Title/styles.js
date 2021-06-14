import styled from 'styled-components';

export const Container = styled.div`
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