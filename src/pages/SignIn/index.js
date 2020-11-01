import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logotipo-preta.png';

import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="QueroMil" height="90" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Seu email" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
          <Link to="/register">Criar conta gratuita</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
