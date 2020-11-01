import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isPublic,
  isProvider,
  isBoth,
  isCorrect,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const { provider } = store.getState().auth;
  const { id } = store.getState().essay;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate && !isPublic) {
    if (!provider) {
      return <Redirect to="student-dashboard" />;
    }
    if (provider) {
      return <Redirect to="professor-dashboard" />;
    }
  }

  if (!isBoth) {
    if (!provider && isProvider) {
      return <Redirect to="student-dashboard" />;
    }
    if (provider && !isProvider) {
      return <Redirect to="professor-dashboard" />;
    }
  }

  if (isCorrect) {
    if (!id) {
      return <Redirect exact to="/professor-dashboard" />;
    }
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isPublic: PropTypes.bool,
  isProvider: PropTypes.bool,
  isBoth: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isPublic: false,
  isProvider: false,
  isBoth: false,
};
