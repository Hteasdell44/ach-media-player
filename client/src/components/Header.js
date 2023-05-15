import React from 'react';
import { Header, Icon, Image as HeaderImage } from 'semantic-ui-react';

const HeaderExampleUsersIcon = () => (
  <div className="header-container">
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Himalaya Player</Header.Content>
    </Header>
    <HeaderImage
      centered
      size='large'
      src="./assets/images/mountain-stencil.jpg"
    />
  </div>
);

export default HeaderExampleUsersIcon;
