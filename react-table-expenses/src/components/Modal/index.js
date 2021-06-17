import React from "react";
import * as S from "./styles";

import Camera from "../../assets/camera.svg";

import Check from "../../assets/check.svg";
import Credit from "../../assets/credit.svg";
import Reject from "../../assets/reject.svg";
import formatCurrency from "../../utils/formatCurrency";
import getFormattedDate from "../../utils/getFormattedDate";

const Modal = ({ isOpen, setIsOpen, data }) => {
  return (
    <>
      <S.ModalContainer>
        <S.ModalContent>
          <S.CloseButton onClick={() => setIsOpen(!isOpen)}>
            <img src={Reject} alt="Fechar modal" />
          </S.CloseButton>

          <S.LeftContent>
            <header>
              <h2>REEMBOLSO #{data.id}</h2>
              <h3>Data de lançamento: {getFormattedDate(data.created_at)}</h3>
            </header>
            <main>
              <S.Detail>
                <span>-</span>
                <span>R${formatCurrency(data.value)}</span>
              </S.Detail>
              <S.Detail>
                <span>Centro de custo</span>
                <span>-</span>
              </S.Detail>
              <S.Detail>
                <span>Categoria</span>
                <span>-</span>
              </S.Detail>
            </main>
            <footer>
              <p>{data.comment}</p>
            </footer>
          </S.LeftContent>
          <S.RightContent>
            <S.RightContentTop>
              <img src={Camera} alt="Ícone de câmera" />
              <span>Reembolso não contém recibo</span>
            </S.RightContentTop>
            <S.RightContentBottom>
              <button>
                <img src={Check} alt="Aprovar reembolso" />
              </button>
              <button>
                <img src={Credit} alt="Crédito" />
              </button>
              <button>
                <img src={Reject} alt="Rejeitar reembolso" />
              </button>
            </S.RightContentBottom>
          </S.RightContent>
        </S.ModalContent>
      </S.ModalContainer>
      <S.ModalOverlay onClick={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default Modal;
