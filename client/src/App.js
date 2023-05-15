import React from "react";
import HeaderExampleUsersIcon from './components/Header';
import Container from "./components/Container";
import EmbedComponent from "./components/Embed";
import { Grid, Image, Rail, Segment } from "semantic-ui-react";
import "./App.css";
import "./index.css";

// // HEADER COMPONENT
// // const HeaderExampleUsersIcon = () => (
//   <div className="header-container">
//     <Header as='h2' icon textAlign='center'>
//       <Icon name='users' circular />
//       <Header.Content>Himalaya Player</Header.Content>
//     </Header>
//     <HeaderImage
//       centered
//       size='large'
//       src="./assets/images/mountain-stencil.jpg"
//     />
//   </div>
// // );

function App() {
  return (
    <div className="App">
      {/* Display the header component */}
      <HeaderExampleUsersIcon />

      {/* Rest of your code
      <Button>Click Here</Button>
      <Container /> */}

     
     {/* EMBED */}
     <EmbedComponent
        id="125292332"
        placeholder="/images/vimeo-example.jpg"
        source="vimeo"
      />


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
