import React, { useState } from 'react';

import Arrow from '../../assets/arrow.svg';
import Search from '../../assets/search.svg';

import * as S from './styles';

const SelectInput = ({ title, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.SelectInputWrapper>
      <S.Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img src={Arrow} alt="Seta" />
      </S.Container>
      <S.InputModalWrapper>
        <SelectInputModal isOpen={isOpen} setIsOpen={setIsOpen} placeholder={placeholder} />
      </S.InputModalWrapper>
    </S.SelectInputWrapper>
  )
}

export default SelectInput

const SelectInputModal = ({ isOpen, setIsOpen, placeholder }) => {

  if (isOpen === false) {
    return null;
  }

  return (
    <>
      <S.SelectInputModal>
        <S.SelectInputModalScroll>
          <S.InputContainer>
            <img src={Search} alt="Lupa" />
            <input type="text" placeholder={placeholder} />

          </S.InputContainer>
          <S.SelectInputModalList>
            <S.SelectInputModalListItem active={true}> <span>Paulo Vitor Lopes</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Paulo Vitor Lopes</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Paulo Vitor Lopes</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Junho 2021</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Junho 2021</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Junho 2021</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Junho 2021</span></S.SelectInputModalListItem>
            <S.SelectInputModalListItem> <span>Junho 2021</span></S.SelectInputModalListItem>
          </S.SelectInputModalList>
        </S.SelectInputModalScroll>
        <S.SelectInputModalButton>
          Aplicar
         </S.SelectInputModalButton>


      </S.SelectInputModal>
      <S.SelectInputOverlay onClick={() => setIsOpen(false)} />
    </>
  )
}
