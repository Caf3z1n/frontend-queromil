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
        <img src={sagat} alt="Sagat" width="150px" />
        <div>
          <span>
            Esse é Thiago Tadeu Ferreira de Oliveira professor da ETEC Fernando
            Prestes de Sorocaba, atualmente é professor titular do Centro
            Estadual de Educação Tecnológica Paula Souza e professor titular da
            Organização Sorocabana de Ensino. Tem experiência na área de Letras,
            com ênfase em Letras, Libras - língua brasileira de sinais e na área
            de Educação, com ênfase em Educação a Distância e em Educação
            especial. Possui treze anos de experiência na área da educação,
            atuando nos ensinos fundamental e médio, dos quais oito anos são
            concomitantemente no ensino técnico em curso pré-vestibular, e ainda
            dois no ensino superior.
          </span>
        </div>
      </Content>
      <Content2>
        <div>
          <span>
            Atuando como professor da disciplina Comunicação e Expressão nos
            cursos de Engenharia Elétrica e da Computação na Faculdade de
            Engenharia de Sorocaba. Dois anos no cargo de coordenador de ensino
            médio na ETEC Fernando Prestes, e desde agosto de 2011 atuando como
            Professor Responsável por Projetos na elaboração de materiais para
            cursos à distância no Grupo de Estudo de Educação a Distância -
            GEEAD do Centro Paula Souza. Onde o foco do cliente é revisar textos
            e ensinar aos alunos como produzir uma redação nota 1000 para que se
            saiam bem no Enem. Qualquer duvida entre em contado com ele:
            thiago.sagat@gmail.com
          </span>
        </div>
        <img src={sagat2} alt="Sagat" width="150px" />
      </Content2>
    </Container>
  );
}
