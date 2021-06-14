import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const TableHeader = styled.div`
  height: 40px;
  padding: 0 0 0 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 11px;
    line-height: 12px;
    font-weight: 400;
    
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    
    padding-right: 25px;
  }

  span:first-child {
      margin-right: 28px;
    }

    span:nth-child(2) {
      margin-left: 8px;
    }

    span:nth-child(5) {
      padding:  0 33px 0 0px;
    }

    span:nth-child(6) {
      padding: 0 33px 0 8px;
    }

    span:nth-child(7) {
      padding-left: 8px;
    }

  .sortAZ {
    background: transparent;
    margin: 1px 33px 0 10px;
  }
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  .filter {
    background: transparent;
    margin: 1px 3px 0 10px;
  }
`;


export const TableBody = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.white};

`;