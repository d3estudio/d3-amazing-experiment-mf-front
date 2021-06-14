import React from 'react'
import { AuthProvider } from './hooks/auth';

import Routes from './routes/index';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark'


const App = () => {
  return (
    < ThemeProvider theme={dark}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
