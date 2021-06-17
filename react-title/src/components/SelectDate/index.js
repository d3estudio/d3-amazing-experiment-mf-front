import React, { useState, useEffect } from 'react'
import { emitEvent, listenEvent } from '@d3/utils';
import months from '../../utils/month';
import axios from 'axios'
import Arrow from '../../assets/arrow.svg'
import ArrowChecked from '../../assets/arrowchecked.svg';
import * as S from './styles';

const SelectDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dates, setDates] = useState(null);
  const [token, setToken] = useState(null);

  function getDates(){
    listenEvent("@d3/react-app-container/dates", async(event) => {
    setDates(event.detail.dates)
    setToken(event.detail.token);

    console.log("Dados compartilhados de data", token);
    });

  }

  useEffect(() => {
    getDates();   
  }, [])
  

  return (
    <>
      <S.Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
       {dates !== null  && <h2>{dates !== null ? months(dates.month_summary[0].month) : ''}, {dates !== null ? dates.month_summary[0].year : ''}</h2>}
        <img src={Arrow} alt="Seta" />
      </S.Container>
      <S.Wrapper>
        <SelectDateModal isOpen={isOpen} dates={dates} token={token} />
      </S.Wrapper>
    </>
  )
}

export default SelectDate

const SelectDateModal = ({ isOpen, dates, token }) => {
  const [selectedDate, setSelectedDate] = useState('');

  if (isOpen === false) {
    return null;
  }

  async function sendDate(month, year) {
    console.log(month, year);
    console.log(token)
    const config = {
      headers: { 'x-access-token': `${token}` }
    };

    const response = await axios.get(`http://localhost:3005/v1/refunds?year=${year}&month=${month}`, config);
    const data = response.data;
    const info_expenses = {
      total: data.total,
      total_paid: data.total_paid,
      total_rejected: data.total_rejected,
      total_to_receive: data.total_to_receive
    }
    
    emitEvent('@d3/react-title/refunds', {refunds: data.refunds, info_expenses: info_expenses});
  }

  return (
    <S.SelectDateModalContainer>
      <input disabled type="text" placeholder="digite um período..." />
      <S.SelectDateModalList>
        {
          dates !== null ? dates.month_summary.map(month => (
            <S.SelectDateModalListItem active={selectedDate === `${month.month-month.year}`} onClick={() => {setSelectedDate(`${month.month-month.year}`); sendDate(month.month, month.year);}} > <span>{months(month.month)} {month.year}</span>{selectedDate === `${month.month-month.year}` && <img src={ArrowChecked} alt="Arrow checked" />}</S.SelectDateModalListItem>
          ))
          :
          null
        }
       
      </S.SelectDateModalList>
    </S.SelectDateModalContainer>
  )
}
