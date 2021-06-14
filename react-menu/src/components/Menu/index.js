import React from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';

import { emitEvent } from '@d3/utils';


import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import dark from '../../styles/themes/dark';

import Logo from '../../assets/zagLogo.svg';

import * as S from './styles';

const Menu = () => {
  const handleSignOut = event => {
    event.preventDefault();
    emitEvent('@d3/react-menu/signout', {})
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <S.Container>
          <Link to="/">
            <S.Logo src={Logo} />
          </Link>
          <S.Nav>
            <ul>
              <li>
                <NavLink exact activeClassName="activedMenu" to="/" >
                  <span>Reembolsos</span>
                </NavLink >
              </li>
              <li>
                <button disabled>
                  <span>Usuários</span>
                </button >
              </li>
              <li>
                <button disabled>
                  <span>Créditos</span>
                </button >
              </li>
              <li>
                <button disable>
                  <span>
                    Faturas
                  </span>
                </ button>
              </li>
              <li>
                <button disabled>
                  <span>Configurações</span>
                </button >
              </li>
              <li>
                <button disabled>
                  <span>Lançar despesa</span>
                </button>
              </li>
              <li>
                <a target="_blank" href="https://zagapp.freshdesk.com/support/home">Ajuda</a>
              </li>
              <li>
                <button onClick={handleSignOut} >Logout</ button>
              </li>
            </ul>
          </S.Nav>
        </S.Container>
      </ ThemeProvider>
    </BrowserRouter>
  )
};

export default Menu;
