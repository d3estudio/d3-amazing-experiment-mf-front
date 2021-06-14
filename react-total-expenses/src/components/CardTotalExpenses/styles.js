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
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;


  > button {
    font-size: 11px;
    line-height: 12px;
    font-weight: 400;
    
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    background: transparent;
    
    opacity: 0.9;
    padding-right: 25px;

    &:first-child {
      margin-right: 37px;
    }

    &:nth-child(2) {
      margin-right: 20px;
    }
  }
`;


export const TableBody = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
`;

export const TotalExpensesContainer = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;

  >h3 {
    font-size: 14.5px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 25px 0 21px;
  }

  > h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 50px;
    font-weight: 300;
    line-height: 70px;

    width: 77%;
    margin: 0 auto 30px;
    border-radius: 4px;
    text-align: center;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.tertiary};
  
    > span {
      font-family: 'Roboto Slab', serif;
      font-size: 35px;
      color: #8b8c8c;
      margin-right: 10px;
    }
  }
`;

export const ExpensesTypes = styled.div`
  width: 100%;
  display: grid;
`;