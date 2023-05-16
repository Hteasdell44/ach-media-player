import React from "react";
import HeaderExampleUsersIcon from './components/Header';
import ListExampleLink from "./components/List";
import Container from "./components/Container";
import EmbedComponent from "./components/Embed";
import { Grid, Image, Rail, Segment } from "semantic-ui-react";
import MenuExampleSubMenu from "./components/Menu";
import "./App.css";
import "./index.css";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <HeaderExampleUsersIcon />

      {/* MENU */}
      <MenuExampleSubMenu />

    
     {/* EMBED */}
     <EmbedComponent
        id="125292332"
        placeholder="/images/vimeo-example.jpg"
        source="vimeo"
      />

     {/* LIST */}
      <div className="my-container">
     <ListExampleLink />
      </div>

      {/* GRID RAILS */}
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            <Image src="/images/wireframe/paragraph.png" />
            <Rail position="left">
              <Segment>Left Rail Content</Segment>
            </Rail>
            <Rail position="right">
              <Segment>Right Rail Content</Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
