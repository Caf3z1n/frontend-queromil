import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPowerSettingsNew } from 'react-icons/md';

import logo from '~/assets/logotipo-preta.png';
import { Container, Content, Login } from '../styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" height="40" />
          <NavLink exact to="/" activeClassName="selected">
            PÁGINA INICIAL
          </NavLink>
          <NavLink to="/about" activeClassName="selected">
            SOBRE
          </NavLink>
        </nav>

        <aside>
          <Login>
            <MdPowerSettingsNew color="#ff4e4e" size={20} />
            <div>
              <nav>
                <NavLink to="/login" activeClassName="selected">
                  LOGAR-SE
                </NavLink>
              </nav>
            </div>
          </Login>
        </aside>
      </Content>
    </Container>
  );
}
