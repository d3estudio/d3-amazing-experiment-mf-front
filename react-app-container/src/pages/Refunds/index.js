import React, {useEffect, useState} from 'react';
import Parcel from 'single-spa-react/parcel';
import axios from 'axios'
import { emitEvent, listenEvent } from '@d3/utils';

import * as S from './styles'

const Refunds = () => {

  async function getToken() {
      listenEvent("@d3/react-app-container/token", async(event) => {

      const config = {
        headers: { 'x-access-token': `${event.detail.token}` }
      };
  
      const response = await axios.get("http://localhost:3005/v1/refunds/date", config);
      const data = response.data;
  
      console.log('Dates', data)
      
      emitEvent('@d3/react-app-container/dates', {dates: data, token: event.detail.token});

    });
  }

  useEffect(() => {
     getToken();
  }, [])

  return (
    <S.Container>
      <Parcel config={() => System.import('@d3/react-title')} />
      <main>
        <S.TableExpensesContainer>
          <Parcel config={() => System.import('@d3/react-table-expenses')} />
        </S.TableExpensesContainer>
        <S.TotalExpensesContainer>
          <Parcel config={() => System.import('@d3/react-total-expenses')} />
        </S.TotalExpensesContainer>
      </main>
    </S.Container>
  )
};

export default Refunds;
