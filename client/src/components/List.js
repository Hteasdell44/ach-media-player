import React from 'react';
import { List as List } from 'semantic-ui-react';

const ListExampleLink = () => (
  <div style={{ padding: 0, textAlign: 'center' }}>
  <List link style={{ marginTop: 50,  paddingTop: -10, paddingBottom: 0, marginLeft: '450px', width: '200px'}}>
    <List.Item active>song</List.Item>
    <List.Item as='a'>song</List.Item>
    <List.Item as='a'>song</List.Item>
    <List.Item as='a'>song</List.Item>
  </List>
  </div>
);

export default ListExampleLink;
