import React from 'react';
import PropTypes from 'prop-types';

import HomeHeader from '~/components/Header/HomeHeader';
import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <HomeHeader />
      {children}
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
