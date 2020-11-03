import React from 'react';

import sagatinho from '~/assets/mascote-minisagatinho.png';
import { Container, Welcome, Help } from './styles';

export default function Home() {
  return (
    <Container>
      <Welcome>
        <div>
          <span>
            Sejam bem-vindos! <br />
            <br />
            Oferecemos a correção da sua redação e também um conjunto de
            ferramentas que irão auxiliá-lo em toda sua evolução. Mesmo que você
            seja um "craque" na escrita, para atingir uma nota mil, é sempre
            necessário praticar. Por isso, desenvolvemos uma plataforma
            aprimorada para corrigir e definir metas de escrita, notas e um
            plano de estudo.
            <br />
            <br />
            Nós corrigimos sua redação!
            <br />
            <br />
            Temos um ótimo professor de correção, pois valorizamos muito o
            trabalho de correção. O professor Thiago Sagat irá corrigir sua
            redação e lhe oferecer um feedback do que você precisa melhorar ou
            manter na sua redação.
          </span>
        </div>
        <img src={sagatinho} alt="Sagat" width="250px" />
      </Welcome>
      <Help>
        <header>
          <strong>Como funciona?</strong>
        </header>

        <div>
          <span>
            Ao se cadastrar no site, é necessário que o corretor Thiago Sagat te
            adicione aos alunos dele, para você conseguir enviar as redações
            para ele corrigir. Por isso recomendamos que ao se cadastrar no site
            entre em contato com o Thiago via Email, para que vocês entrem em um
            acordo. Ao fecharem o acordo, o aluno tem o direito de enviar as
            redações e consequentemente o Thiago corrigi-la.
          </span>
        </div>
      </Help>
    </Container>
  );
}
