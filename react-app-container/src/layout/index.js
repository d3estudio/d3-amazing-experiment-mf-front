import React from 'react'
import Parcel from 'single-spa-react/parcel';

import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <S.Container>
      <header>
        <Parcel config={() => System.import('@d3/react-menu')} />
      </header>
      <main>
        {children}
      </main>
    </S.Container>
  )
}

export default Layout;
