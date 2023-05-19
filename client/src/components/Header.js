import React from 'react';
import { Header, Icon, Image as HeaderImage } from 'semantic-ui-react';

const HeaderExampleUsersIcon = () => (
  <div className="header-container">
    <Header as='h2' icon textAlign='center'>
      <Icon name='area graph' circular />
      <Header.Content>ACH Music Player</Header.Content>
    </Header>
    <HeaderImage
      centered
      size='large'
    />
  </div>
);

export default HeaderExampleUsersIcon;
