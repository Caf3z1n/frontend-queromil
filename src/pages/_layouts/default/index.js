import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import { store } from '~/store';

import ProfessorHeader from '~/components/Header/ProfessorHeader';
import StudentHeader from '~/components/Header/StudentHeader';

export default function DefaultLayout({ children }) {
  const { provider } = store.getState().auth;

  return (
    <Wrapper>
      {provider ? <ProfessorHeader /> : <StudentHeader />}
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
