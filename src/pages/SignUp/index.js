import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logotipo-preta.png';

import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="QueroMil" height="90" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome Completo" />
          <Input name="email" placeholder="Seu email" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Criar conta</button>
          <Link to="/login">Já tenho uma conta</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
