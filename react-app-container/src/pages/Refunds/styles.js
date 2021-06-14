import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 134px);

    background-color: ${props => props.theme.colors.primary};
    
  }

`

export const TableExpensesContainer = styled.div`
  > div {
    width: 73vw;
    height: calc(100% - 40px);
  }
`;

export const TotalExpensesContainer = styled.div`
  > div {
    width: 25.4vw;
    height: calc(100% - 40px);

  }
`;