import React from "react";
import HeaderExampleUsersIcon from './Header';
import ListExampleLink from "./List";
import EmbedComponent from "./Embed";
import { Grid, Image, Rail, Segment } from "semantic-ui-react";
import MenuExampleSubMenu from "./Menu";
import "../App.css"
import "../index.css";
import 'semantic-ui-css/semantic.min.css';
import "./Home.css";

function Home() {
    return (
      <div className="App">
  
        <HeaderExampleUsersIcon />
  
        <MenuExampleSubMenu />
  
    
       <EmbedComponent
          id="125292332"
          placeholder="/images/vimeo-example.jpg"
          source="vimeo"
        />
        <div className="my-container">
       <ListExampleLink />
        </div>
  
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

  export default Home;