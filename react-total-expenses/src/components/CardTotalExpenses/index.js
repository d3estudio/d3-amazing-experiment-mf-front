import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import dark from '../../styles/themes/dark';

import ArrowRight from '../../assets/arrow-right.svg';
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
          <S.ExpensesTypes>
            <div>
              <h4>Pendentes</h4>
              <h3><span>R$</span>122,31</h3>
            </div>
            <div>
              <h4>Aprovados</h4>
              <h3><span>R$</span>122,31</h3>
            </div>
            <div>
              <h4>Rejeitados</h4>
              <h3><span>R$</span>122,31</h3>
            </div>
            <div><h4>Pagos</h4>
              <h3><span>R$</span>122,31</h3></div>
          </S.ExpensesTypes>
          <S.CorporativeCard>
            <h4>Cartão corporativo</h4>
            <h3><span>R$</span>122,31</h3>
          </S.CorporativeCard>
          <S.CenterOfExpense>
            <h4>Por centro de custo</h4>
            <Expense />
          </S.CenterOfExpense>
        </S.TableBody>
      </S.Container>
    </ThemeProvider>

  )
}

export default CardTotalExpenses;


const Expense = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.ExpenseContainer>
      <S.ExpenseButton onClick={() => setIsOpen(!isOpen)}>
        <div> <h2>Sensia</h2><img src={ArrowRight} alt="Seta apontando para direita" /></div>
        <h3><span>R$</span>133,00</h3>
      </S.ExpenseButton>
      {isOpen && <S.ExpenseList>
        <S.ExpenseListItem>
          <h5>Viagem</h5>
          <h4><span>R$</span>133,00</h4>
        </S.ExpenseListItem>
        <S.ExpenseListItem>
          <h5>Viagem</h5>
          <h4><span>R$</span>133,00</h4>
        </S.ExpenseListItem>
        <S.ExpenseListItem>
          <h5>Viagem</h5>
          <h4><span>R$</span>133,00</h4>
        </S.ExpenseListItem>
      </S.ExpenseList>
      }


    </S.ExpenseContainer>
  )
}
