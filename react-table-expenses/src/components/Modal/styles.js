import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 990;
  background: rgba(0, 0, 0, 0.76);
`;

export const ModalContent = styled.div`
  width: 75vw;
  height: 494px;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.white};

  position: relative;
  display: flex;
  flex-direction: row;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1000;

  background: transparent;

  > img {
    width: 15px;
    height: 15px;
  }
`;

export const LeftContent = styled.div`
  width: 45%;
  height: 100%;
  border-right: 1px solid #d9d9d9;

  header,
  footer {
    width: 100%;
    height: 60px;
    padding: 10px 30px;
    border-bottom: 1px solid #d9d9d9;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > h2,
    h3,
    p {
      font-size: 14px;
      font-weight: 300;
      color: ${(props) => props.theme.colors.gray};
    }

    > h2 {
      opacity: 0.7;
    }

    > h3 {
      opacity: 0.5;
    }
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 30px;
  border-bottom: 1px solid #d9d9d9;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.gray};

    &:first-child {
      opacity: 0.5;
    }
  }
`;

export const RightContent = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightContentTop = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #d9d9d9;

  span {
    font-size: 12px;
    color: #a6a6a6;
    font-weight: 500;
  }
`;

export const RightContentBottom = styled.div`
  width: 100%;
  height: 14%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px 20px;

  > button {
    padding: 15px;
    border-radius: 3px;

    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.black};

    > img {
      width: 15px;
      height: 15px;
    }
  }
`;
