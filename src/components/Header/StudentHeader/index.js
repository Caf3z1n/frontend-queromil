import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logotipo-preta.png';
import { Container, Content, Profile } from '../styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" height="40" />
          <NavLink to="/student-dashboard" activeClassName="selected">
            MINHAS REDAÇÕES
          </NavLink>
          <NavLink to="/send" activeClassName="selected">
            ENVIAR REDAÇÃO
          </NavLink>
          <NavLink to="/about" activeClassName="selected">
            SOBRE
          </NavLink>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <NavLink to="/profile">Meu perfil</NavLink>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : `https://avatars.abstractapi.com/v1/?api_key=e61b57f83f824198ac08ffe518ece8dc&&image_size=200&name=${profile.name}`
              }
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
