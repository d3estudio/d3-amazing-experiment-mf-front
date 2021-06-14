import React from 'react';

import SelectInput from '../SelectInput';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import dark from '../../styles/themes/dark';

import SortAZ from '../../assets/sort.svg';
import Filter from '../../assets/filter.svg';
import * as S from './styles';

const ExpensesTable = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <S.Container>

        <S.TableHeader>
          <S.LeftContent>
            <span>id</span>
            <span>data</span>
            <SelectInput title="usuário" placeholder="filtrar por nome" />
            <button type="button" className="sortAZ">
              <img src={SortAZ} alt="Ordenar em ordem crescente ou decrescente" />
            </button>
            <span><SelectInput title="centro de custo" placeholder="filtrar por centro de custo" /></span>
            <span><SelectInput title="categoria" placeholder="filtrar por categoria" /></span>
            <span>valor</span>
          </S.LeftContent>

          <S.RightContent>
            <SelectInput title="status" />
            <button type="button" className="filter">
              <img src={Filter} alt="Limpar filtros" />
            </button>
          </S.RightContent>
        </S.TableHeader>

        <S.TableBody>

        </S.TableBody>

      </S.Container>
    </ThemeProvider>
  )
}

export default ExpensesTable
