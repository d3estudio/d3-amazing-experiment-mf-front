import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import dark from '../../styles/themes/dark';
import SelectDate from '../SelectDate';

import * as S from './styles';

const Title = () => {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <S.Container>
        <h3>Reembolsos</h3>
        <SelectDate />
      </S.Container>
    </ThemeProvider>
  )
}

export default Title
