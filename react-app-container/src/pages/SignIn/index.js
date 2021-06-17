import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/zagLogo.svg';

import * as S from './styles'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLoading } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <Link to="/"><img src={Logo} alt="Logo Zag" /></Link>
      </S.Header>
      <S.Main>
        <h2>Bem-vindo ao Zag!</h2>
        <span>Para entrar, insira seu e-mail e senha</span>
      <form>
        <input placeholder="Email" type="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
        <input placeholder="Senha" type="password"  required onChange={(e) => setPassword(e.target.value)} value={password} />
        <S.Button isLoading={isLoading} type="button" onClick={() => signIn(email, password)}> {isLoading ? "" : "Entrar"}</S.Button>
      </form>
      <Link>Esqueceu sua senha?</Link>
      </S.Main>
     
    </S.Container>
  )
};

export default SignIn;
