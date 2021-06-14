import React, { useState } from 'react'

import Arrow from '../../assets/arrow.svg'
import ArrowChecked from '../../assets/arrowchecked.svg';
import * as S from './styles';

const SelectDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h2>Junho, 2021</h2>
        <img src={Arrow} alt="Seta" />
      </S.Container>
      <S.Wrapper>
        <SelectDateModal isOpen={isOpen} />
      </S.Wrapper>
    </>
  )
}

export default SelectDate

const SelectDateModal = ({ isOpen }) => {

  if (isOpen === false) {
    return null;
  }

  return (
    <S.SelectDateModalContainer>
      <input type="text" placeholder="digite um período..." />
      <S.SelectDateModalList>
        <S.SelectDateModalListItem active={true}> <span>Junho 2021</span> <img src={ArrowChecked} alt="Arrow checked" /></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
        <S.SelectDateModalListItem> <span>Junho 2021</span></S.SelectDateModalListItem>
      </S.SelectDateModalList>
    </S.SelectDateModalContainer>
  )
}
