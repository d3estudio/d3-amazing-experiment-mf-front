import React from 'react';
import Parcel from 'single-spa-react/parcel';

import * as S from './styles'

const Refunds = () => {
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
