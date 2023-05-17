import React from 'react';
import { Header, Icon, Image as HeaderImage, List } from 'semantic-ui-react';
import "./Liked.css"

const Liked = () => {
  return (
    <>
      <div className="header-container">
        <Header as='h2' icon textAlign='center'>
          <Icon name='area graph' circular />
          <Header.Content>Himalaya Player</Header.Content>
        </Header>
        <HeaderImage centered size='large'/>
      </div>

      <div>
        <List>
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
        </List>
      </div>
    </>
  );
}

export default Liked;