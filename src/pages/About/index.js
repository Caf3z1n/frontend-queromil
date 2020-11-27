import React from 'react';

import sagat from '~/assets/sagat.jpg';
import sagat2 from '~/assets/sagat2.jpg';
import { Container, Content, Content2 } from './styles';

export default function Home() {
  return (
    <Container>
      <header>
        <strong>Sobre o Sagat</strong>
      </header>
      <Content>
        <img src={sagat} alt="Sagat" width="170px" />
        <div>
          <span>
            Este é o Thiago Sagat, professor na ETEC Fernando Prestes em
            Sorocaba. Tem experiência na área de Letras, com ênfase em Letras,
            Libras - Língua Brasileira de Sinais e na área de Educação, com
            ênfase no ensino da Língua Portuguesa. Possui dezoito anos de
            experiência na área da educação, atuando nos ensinos fundamental e
            médio, dos quais doze anos são concomitantemente no ensino técnico,
            em curso pré-vestibular, e ainda dois anos no ensino superior,
            atuando como professor da disciplina Comunicação e Expressão nos
            cursos de Engenharia Elétrica e da Computação na Faculdade de
            Engenharia de Sorocaba.
          </span>
        </div>
      </Content>
      <Content2>
        <div>
          <span>
            Dois anos no cargo de coordenador de ensino médio na ETEC Fernando
            Prestes, e entre agosto de 2011 e julho de 2016 atuou como Professor
            Responsável por Projetos na elaboração de materiais para cursos à
            distância no Grupo de Estudo de Educação a Distância - GEEAD do
            Centro Paula Souza. O docente tem vasta experiência em revisão de
            textos e nas disciplinas de Gramática e Redação. Desde 2016 atua
            como professor titular nos cursos de EM e ETIM na Etec Fernando
            Prestes lecionando, principalmente, técnicas de redação da prova do
            ENEM. O foco do seu trabalho é revisar textos e ensinar aos alunos
            como produzir uma redação nota 1000 para a tão esperada aprovação no
            Enem.
            <br />
            Qualquer dúvida, entre em contado com ele: thiago.sagat@gmail.com
          </span>
        </div>
        <img src={sagat2} alt="Sagat" width="170px" />
      </Content2>
    </Container>
  );
}
