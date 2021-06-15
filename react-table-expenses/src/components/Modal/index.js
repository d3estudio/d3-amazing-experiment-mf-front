import React from "react";
import * as S from "./styles";

import Camera from "../../assets/camera.svg";

import Check from "../../assets/check.svg";
import Credit from "../../assets/credit.svg";
import Reject from "../../assets/reject.svg";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <S.ModalContainer>
        <S.ModalContent>
          <S.CloseButton onClick={() => setIsOpen(!isOpen)}>
            <img src={Reject} alt="Fechar modal" />
          </S.CloseButton>

          <S.LeftContent>
            <header>
              <h2>REEMBOLSO #9999</h2>
              <h3>Data de lançamento: 08/06/21</h3>
            </header>
            <main>
              <S.Detail>
                <span>Maisinha dos Santos</span>
                <span>R$122,31</span>
              </S.Detail>
              <S.Detail>
                <span>Centro de custo</span>
                <span>Sensia</span>
              </S.Detail>
              <S.Detail>
                <span>Categoria</span>
                <span>Viagem</span>
              </S.Detail>
            </main>
            <footer>
              <p>Comentário...</p>
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
