import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import dark from '../../styles/themes/dark';

import * as S from './styles';

const CardTotalExpenses = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <S.Container>
        <S.TableHeader>
          <S.LeftContent>
          </S.LeftContent>
          <S.RightContent>
            <button>exportar</button>
            <button>imprimir</button>
          </S.RightContent>
        </S.TableHeader>
        <S.TableBody>
          <S.TotalExpensesContainer>
            <h3>Total de despesas</h3>
            <h2><span>R$</span>122,31</h2>
          </S.TotalExpensesContainer>

        </S.TableBody>
      </S.Container>
    </ThemeProvider>

  )
}

export default CardTotalExpenses
