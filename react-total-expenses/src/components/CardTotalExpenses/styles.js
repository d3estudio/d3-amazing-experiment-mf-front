import styled from "styled-components";

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
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  > button {
    font-size: 11px;
    line-height: 12px;
    font-weight: 400;

    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
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

  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #d3d3d3;
    border-radius: 0 3px 3px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 0 3px 3px 0;
  }
`;

export const TotalExpensesContainer = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;

  > h3 {
    font-size: 14.5px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 25px 0 21px;
  }

  > h2 {
    font-family: "Roboto Slab", serif;
    font-size: 50px;
    font-weight: 300;
    line-height: 70px;

    width: 77%;
    margin: 0 auto 30px;
    border-radius: 4px;
    text-align: center;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.tertiary};

    > span {
      font-family: "Roboto Slab", serif;
      font-size: 35px;
      color: #8b8c8c;
      margin-right: 10px;
    }
  }
`;

export const ExpensesTypes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #d9d9d9;

  > div {
    height: 73px;
    padding: 15px 0 15px 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;

    > h4 {
      font-size: 10px;
      font-weight: 300;
      color: #8b8c8c;
      text-transform: uppercase;
    }

    > h3 {
      font-family: "Roboto Slab", serif;
      font-size: 28px;
      font-weight: 300;
      color: ${(props) => props.theme.colors.black};
      padding-bottom: 5px;

      > span {
        font-family: "Roboto Slab", serif;
        font-size: 20px;
        color: #8b8c8c;
        margin-right: 5px;
      }
    }

    &:first-child {
      border-right: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
    }

    &:nth-child(2) {
      border-bottom: 1px solid #d9d9d9;
    }

    &:nth-child(3) {
      border-right: 1px solid #d9d9d9;

      > h3 {
        color: ${(props) => props.theme.colors.warning};
      }
    }

    &:last-child {
      > h3 {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

export const CorporativeCard = styled.div`
  width: 100%;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;

  > h4 {
    font-size: 10px;
    font-weight: 300;
    color: #8b8c8c;
    text-transform: uppercase;
  }

  > h3 {
    font-family: "Roboto Slab", serif;
    font-size: 28px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.black};
    padding-bottom: 5px;

    > span {
      font-family: "Roboto Slab", serif;
      font-size: 20px;
      color: #8b8c8c;
      margin-right: 5px;
    }
  }
`;

export const CenterOfExpense = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    width: 100%;
    font-size: 10px;
    font-weight: 300;
    color: #8b8c8c;
    text-transform: uppercase;
    padding: 10px 0;

    border-bottom: 1px solid #d9d9d9;
  }
`;

export const ExpenseContainer = styled.div`
  width: 100%;
`;

export const ExpenseButton = styled.button`
  width: 100%;
  padding: 15px 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid #d9d9d9;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > h2 {
      font-size: 15px;
      color: ${(props) => props.theme.colors.black};
    }

    > img {
      width: 6px;
      height: 9px;
      margin-left: 10px;
    }
  }

  > h3 {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.black};

    > span {
      font-family: "Roboto Slab", serif;
      font-size: 12px;
      color: #8b8c8c;
      margin-right: 5px;
    }
  }
`;

export const ExpenseList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  border-bottom: 1px solid #d9d9d9;
`;

export const ExpenseListItem = styled.div`
  width: 100%;
  padding: 0 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #d9d9d9;
  }

  > h5 {
    font-size: 10px;
    font-weight: 300;
    text-transform: uppercase;
    color: #8b8c8c;
  }

  > h4 {
    font-family: "Roboto Slab", serif;
    font-size: 13px;
    border: none;
    text-align: right;
    font-weight: 400;

    > span {
      font-size: 10px;
      margin-right: 5px;
    }
  }
`;
