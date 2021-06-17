import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap');

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
    color: ${(props) => props.theme.colors.white};

    padding-right: 25px;
  }

  span:first-child {
    margin-right: 28px;
  }

  span:nth-child(2) {
    margin-left: 8px;
  }

  span:nth-child(5) {
    padding: 0 33px 0 0px;
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
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  .filter {
    background: transparent;
    margin: 1px 3px 0 10px;
  }
`;

export const TableBody = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap');
 
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};

  overflow-y: auto;

  h2 {
    width: 100%;
    text-align: center;

    margin: 15px 0;
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.primary};
  }

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

export const Separators = styled.div`
  width: 90px;
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  > div {
    width: 50%;
    height: 100%;
    border-left: 1px solid #d9d9d9;
  }
`;

export const TableItem = styled.button`
  width: 100%;
  height: 50px;

  display: flex;
  background: none;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #f5f5f5;
  }

  > div {
    padding: 15px 0 0 15px;
    text-align: left;
    span {
      font-size: 12px;
      font-weight: 300;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .id {
    width: 50px;
    margin-right: 25px;
  }

  .date {
    width: 55px;
  }

  .user {
    width: 140px;
    padding-top: 18px;
    margin-right: 10px;

    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.primary};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .centerOfExpense {
    width: 140px;
  }

  .category {
    width: 120px;
  }

  .value {
    width: 90px;
  }

  .detail {
    width: 85px;
    > img {
      width: 25px;
      height: 11px;
    }
  }

  .status {
    flex: 1;
    padding: 0;

    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    button {
      cursor: not-allowed;
      background-color: transparent;
      width: 45px;
      height: 50px;
      padding: 15px;
      > img {
        width: 12px;
        height: 12px;
        transition: all 0.2s ease-in-out;
      }
      &:hover {
        > img {
          transform: scale(1.2);
        }
      }
    }
  }
`;
