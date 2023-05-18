import React from 'react';
import { Header, Icon, Image as HeaderImage, List } from 'semantic-ui-react';
import { Embed, Grid } from 'semantic-ui-react';

const Liked = () => {
  return (
    <div>
      {/* FORM */}
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

      {/* Embed */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Grid.Column>
          <Embed
            style={{ width: '400px', height: '200px', paddingTop: 0, paddingBottom: 0 }}
            url={'url'}
            placeholder={'placeholder'}
            source={'source'}
          />
        </Grid.Column>
      </div>
    </div>
  );
}

export default Liked;
